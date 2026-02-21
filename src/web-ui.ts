#!/usr/bin/env node
/**
 * web-ui.ts - SkillGene Web UI 服务器
 * 提供搜索、浏览、统计等可视化界面
 */
import http from "http";
import { getDb, searchCapsules, getCapsule, contributeCapsule, evolveCapsule, updateCapsuleTags, updateCapsuleGenes } from "./db.js";

const PORT = parseInt(process.env.PORT || "3456");

function parseBody(req: http.IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk: Buffer) => { body += chunk.toString(); });
    req.on("end", () => {
      try { resolve(JSON.parse(body)); }
      catch { reject(new Error("Invalid JSON")); }
    });
    req.on("error", reject);
  });
}

function jsonRes(res: http.ServerResponse, status: number, data: any) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

function getStats() {
  const db = getDb();
  const total = (db.prepare("SELECT COUNT(*) as c FROM capsules").get() as any).c;
  const genes = (db.prepare("SELECT COUNT(*) as c FROM genes").get() as any).c;
  const domains = db.prepare("SELECT domain, COUNT(*) as c FROM capsules GROUP BY domain ORDER BY c DESC").all() as any[];
  const topRated = db.prepare("SELECT id, name, domain, rating, usage_count FROM capsules ORDER BY rating DESC LIMIT 10").all() as any[];
  const recentUsed = db.prepare("SELECT id, name, domain, usage_count FROM capsules ORDER BY usage_count DESC LIMIT 10").all() as any[];
  return { total, genes, domains, topRated, recentUsed };
}

function listCapsules(domain: string, page: number, limit: number) {
  const db = getDb();
  const offset = (page - 1) * limit;
  const where = domain && domain !== "all" ? "WHERE domain = ?" : "";
  const params = domain && domain !== "all" ? [domain, limit, offset] : [limit, offset];
  const rows = db.prepare(`SELECT id, name, description, domain, tags, rating, usage_count FROM capsules ${where} ORDER BY rating DESC LIMIT ? OFFSET ?`).all(...params) as any[];
  const countRow = db.prepare(`SELECT COUNT(*) as c FROM capsules ${where}`).get(...(domain && domain !== "all" ? [domain] : [])) as any;
  return { rows, total: countRow.c };
}

const HTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SkillGene - AI 能力胶囊平台</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#0f0f23;color:#e0e0e0;min-height:100vh}
.header{background:linear-gradient(135deg,#1a1a3e 0%,#2d1b69 50%,#1a3a5c 100%);padding:24px 40px;border-bottom:1px solid #333}
.header h1{font-size:28px;background:linear-gradient(90deg,#00d4ff,#7b68ee,#ff6b9d);-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:inline}
.header .sub{color:#888;margin-left:16px;font-size:14px}
.container{max-width:1400px;margin:0 auto;padding:24px 40px}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:32px}
.stat-card{background:#1a1a2e;border:1px solid #2a2a4a;border-radius:12px;padding:20px;text-align:center}
.stat-card .num{font-size:36px;font-weight:700;background:linear-gradient(90deg,#00d4ff,#7b68ee);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.stat-card .label{color:#888;font-size:13px;margin-top:4px}
.search-box{display:flex;gap:12px;margin-bottom:24px}
.search-box input{flex:1;padding:14px 20px;background:#1a1a2e;border:1px solid #333;border-radius:10px;color:#fff;font-size:16px;outline:none;transition:border .2s}
.search-box input:focus{border-color:#7b68ee}
.search-box button{padding:14px 28px;background:linear-gradient(135deg,#7b68ee,#00d4ff);border:none;border-radius:10px;color:#fff;font-size:16px;cursor:pointer;font-weight:600;transition:opacity .2s}
.search-box button:hover{opacity:.85}
.tabs{display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap}
.tab{padding:8px 16px;background:#1a1a2e;border:1px solid #2a2a4a;border-radius:8px;cursor:pointer;font-size:13px;color:#aaa;transition:all .2s}
.tab:hover,.tab.active{background:#2d1b69;border-color:#7b68ee;color:#fff}
.tab .cnt{background:#333;padding:1px 6px;border-radius:4px;font-size:11px;margin-left:4px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(380px,1fr));gap:16px}
.card{background:#1a1a2e;border:1px solid #2a2a4a;border-radius:12px;padding:20px;cursor:pointer;transition:all .2s}
.card:hover{border-color:#7b68ee;transform:translateY(-2px);box-shadow:0 8px 24px rgba(123,104,238,.15)}
.card .title{font-size:16px;font-weight:600;color:#fff;margin-bottom:8px;display:flex;align-items:center;gap:8px}
.card .desc{color:#888;font-size:13px;line-height:1.5;margin-bottom:12px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.card .meta{display:flex;gap:8px;flex-wrap:wrap}
.tag{padding:2px 8px;background:#2a2a4a;border-radius:4px;font-size:11px;color:#aaa}
.tag.domain{background:#1b2838;color:#00d4ff}
.rating{color:#ffd700;font-size:13px}
.modal-overlay{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.7);z-index:100;justify-content:center;align-items:center}
.modal-overlay.show{display:flex}
.modal{background:#1a1a2e;border:1px solid #333;border-radius:16px;padding:32px;max-width:800px;width:90%;max-height:85vh;overflow-y:auto}
.modal .close{float:right;background:none;border:none;color:#888;font-size:24px;cursor:pointer}
.modal h2{font-size:22px;margin-bottom:8px;color:#fff}
.modal .domain-tag{display:inline-block;padding:4px 12px;background:#1b2838;color:#00d4ff;border-radius:6px;font-size:13px;margin-bottom:16px}
.gene{background:#12122a;border:1px solid #2a2a4a;border-radius:10px;padding:16px;margin-bottom:12px}
.gene .gene-title{font-weight:600;color:#7b68ee;margin-bottom:8px;font-size:14px}
.gene .gene-type{display:inline-block;padding:1px 6px;background:#2d1b69;border-radius:4px;font-size:11px;color:#ccc;margin-left:8px}
.gene .gene-content{color:#bbb;font-size:13px;line-height:1.6;white-space:pre-wrap;word-break:break-word}
.page-nav{display:flex;justify-content:center;gap:8px;margin-top:24px}
.page-nav button{padding:8px 16px;background:#1a1a2e;border:1px solid #333;border-radius:8px;color:#aaa;cursor:pointer}
.page-nav button:hover{border-color:#7b68ee;color:#fff}
.page-nav button.active{background:#2d1b69;border-color:#7b68ee;color:#fff}
.chart-bar{display:flex;align-items:center;gap:12px;margin-bottom:8px}
.chart-bar .bar-label{width:140px;text-align:right;font-size:13px;color:#aaa;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.chart-bar .bar-fill{height:24px;background:linear-gradient(90deg,#7b68ee,#00d4ff);border-radius:4px;transition:width .5s;min-width:2px}
.chart-bar .bar-val{font-size:12px;color:#888;min-width:40px}
.empty{text-align:center;padding:60px;color:#555;font-size:16px}
@media(max-width:768px){.stats-grid{grid-template-columns:repeat(2,1fr)}.grid{grid-template-columns:1fr}.container{padding:16px}}
.btn{padding:10px 20px;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:600;transition:opacity .2s}
.btn:hover{opacity:.85}
.btn-primary{background:linear-gradient(135deg,#7b68ee,#00d4ff);color:#fff}
.btn-success{background:#27ae60;color:#fff}
.btn-warning{background:#f39c12;color:#fff}
.btn-danger{background:#e74c3c;color:#fff}
.btn-sm{padding:6px 14px;font-size:12px}
.btn-group{display:flex;gap:8px;margin-top:16px;flex-wrap:wrap}
.form-group{margin-bottom:16px}
.form-group label{display:block;color:#aaa;font-size:13px;margin-bottom:6px;font-weight:600}
.form-group input,.form-group textarea,.form-group select{width:100%;padding:10px 14px;background:#12122a;border:1px solid #333;border-radius:8px;color:#fff;font-size:14px;outline:none;transition:border .2s;font-family:inherit}
.form-group input:focus,.form-group textarea:focus,.form-group select:focus{border-color:#7b68ee}
.form-group textarea{min-height:80px;resize:vertical}
.form-group select{appearance:auto}
.gene-editor{background:#12122a;border:1px solid #2a2a4a;border-radius:10px;padding:16px;margin-bottom:12px;position:relative}
.gene-editor .gene-remove{position:absolute;top:8px;right:8px;background:#e74c3c;border:none;color:#fff;width:24px;height:24px;border-radius:50%;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center}
.toast-container{position:fixed;top:20px;right:20px;z-index:200;display:flex;flex-direction:column;gap:8px}
.toast{padding:14px 24px;border-radius:10px;color:#fff;font-size:14px;animation:toastIn .3s ease;box-shadow:0 4px 12px rgba(0,0,0,.3)}
.toast.success{background:#27ae60}
.toast.error{background:#e74c3c}
@keyframes toastIn{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
.detail-actions{display:flex;gap:8px;margin:16px 0;flex-wrap:wrap;padding-bottom:16px;border-bottom:1px solid #2a2a4a}
</style>
</head>
<body>
<div class="header">
  <h1>SkillGene</h1>
  <span class="sub">AI 能力胶囊平台 — MCP 驱动的技能胶囊搜索与进化</span>
</div>
<div class="container">
  <div class="stats-grid" id="stats"></div>
  <div class="search-box">
    <input id="q" placeholder="搜索胶囊... (如: react, RAG, agent, 安全)" autofocus>
    <button onclick="doSearch()">搜索</button>
    <button class="btn btn-success" onclick="openCreateModal()">+ 新建胶囊</button>
  </div>
  <div id="domain-chart" style="margin-bottom:24px"></div>
  <div class="tabs" id="tabs"></div>
  <div class="grid" id="results"></div>
  <div class="page-nav" id="pager"></div>
</div>
<div class="modal-overlay" id="modal" onclick="if(event.target===this)closeModal()">
  <div class="modal" id="modal-content"></div>
</div>
<div class="modal-overlay" id="createModal" onclick="if(event.target===this)closeCreateModal()">
  <div class="modal">
    <button class="close" onclick="closeCreateModal()">&times;</button>
    <h2>新建胶囊</h2>
    <div class="form-group"><label>名称</label><input id="c-name" placeholder="胶囊名称"></div>
    <div class="form-group"><label>描述</label><textarea id="c-desc" placeholder="胶囊描述"></textarea></div>
    <div class="form-group"><label>领域</label><input id="c-domain" placeholder="如: frontend, backend, devops"></div>
    <div class="form-group"><label>标签（逗号分隔）</label><input id="c-tags" placeholder="react, hooks, 状态管理"></div>
    <h3 style="color:#7b68ee;margin-bottom:12px;font-size:16px">基因 <button class="btn btn-sm btn-primary" onclick="addCreateGene()">+ 添加基因</button></h3>
    <div id="c-genes"></div>
    <div class="btn-group">
      <button class="btn btn-primary" onclick="submitCreate()">创建胶囊</button>
      <button class="btn" style="background:#333;color:#aaa" onclick="closeCreateModal()">取消</button>
    </div>
  </div>
</div>
<div class="modal-overlay" id="editModal" onclick="if(event.target===this)closeEditModal()">
  <div class="modal" id="editModalContent"></div>
</div>
<div class="toast-container" id="toasts"></div>
<script>
let currentDomain='all',currentPage=1,PAGE_SIZE=24,_dc=null;
async function api(path){return(await fetch(path)).json()}
async function init(){
  const s=await api('/api/stats');
  document.getElementById('stats').innerHTML=
    card(s.total,'胶囊总数')+card(s.genes,'基因总数')+card(s.domains.length,'领域数')+card(Math.round(s.total/Math.max(1,s.domains.length)),'平均/领域');
  const max=s.domains[0]?.c||1;
  document.getElementById('domain-chart').innerHTML='<h3 style="color:#888;font-size:14px;margin-bottom:12px">领域分布 Top 15</h3>'+
    s.domains.slice(0,15).map(d=>'<div class="chart-bar"><span class="bar-label">'+d.domain+'</span><div class="bar-fill" style="width:'+Math.max(2,d.c/max*400)+'px"></div><span class="bar-val">'+d.c+'</span></div>').join('');
  buildTabs(s.domains);
  loadPage();
}
function card(n,l){return'<div class="stat-card"><div class="num">'+n.toLocaleString()+'</div><div class="label">'+l+'</div></div>'}
function buildTabs(domains){
  let h='<div class="tab active" onclick="setDomain(\\'all\\',this)">全部</div>';
  domains.forEach(d=>{h+='<div class="tab" onclick="setDomain(\\''+d.domain+'\\',this)">'+d.domain+'<span class="cnt">'+d.c+'</span></div>'});
  document.getElementById('tabs').innerHTML=h;
}
function setDomain(d,el){currentDomain=d;currentPage=1;document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));el.classList.add('active');loadPage()}
async function loadPage(){
  const data=await api('/api/list?domain='+encodeURIComponent(currentDomain)+'&page='+currentPage+'&limit='+PAGE_SIZE);
  if(!data.rows.length){document.getElementById('results').innerHTML='<div class="empty">暂无数据</div>';document.getElementById('pager').innerHTML='';return}
  document.getElementById('results').innerHTML=data.rows.map(r=>{
    const tags=typeof r.tags==='string'?JSON.parse(r.tags):r.tags;
    return'<div class="card" onclick="showDetail(\\''+r.id+'\\')"><div class="title">'+esc(r.name)+' <span class="rating">★ '+Number(r.rating).toFixed(1)+'</span></div><div class="desc">'+esc(r.description)+'</div><div class="meta"><span class="tag domain">'+r.domain+'</span>'+(tags||[]).slice(0,4).map(t=>'<span class="tag">'+esc(t)+'</span>').join('')+'</div></div>'
  }).join('');
  const pages=Math.ceil(data.total/PAGE_SIZE);
  let pg='';for(let i=1;i<=Math.min(pages,10);i++)pg+='<button class="'+(i===currentPage?'active':'')+'" onclick="currentPage='+i+';loadPage()">'+i+'</button>';
  if(pages>10)pg+='<button onclick="currentPage='+pages+';loadPage()">...'+pages+'</button>';
  document.getElementById('pager').innerHTML=pg;
}
async function doSearch(){
  const q=document.getElementById('q').value.trim();
  if(!q){loadPage();return}
  const data=await api('/api/search?q='+encodeURIComponent(q));
  document.getElementById('results').innerHTML=data.length?data.map(r=>{
    const tags=typeof r.tags==='string'?JSON.parse(r.tags):r.tags;
    return'<div class="card" onclick="showDetail(\\''+r.id+'\\')"><div class="title">'+esc(r.name)+' <span class="rating">★ '+Number(r.rating).toFixed(1)+'</span></div><div class="desc">'+esc(r.description)+'</div><div class="meta"><span class="tag domain">'+r.domain+'</span>'+(tags||[]).slice(0,4).map(t=>'<span class="tag">'+esc(t)+'</span>').join('')+'</div></div>'
  }).join(''):'<div class="empty">未找到匹配的胶囊</div>';
  document.getElementById('pager').innerHTML='';
}
async function showDetail(id){
  const c=await api('/api/capsule/'+id);
  if(!c){return}
  _dc=c;
  const tags=typeof c.tags==='string'?JSON.parse(c.tags):c.tags;
  document.getElementById('modal-content').innerHTML=
    '<button class="close" onclick="closeModal()">&times;</button><h2>'+esc(c.name)+'</h2><div class="domain-tag">'+c.domain+'</div> <span class="rating" style="font-size:16px">★ '+Number(c.rating).toFixed(1)+'</span> <span style="color:#888;font-size:13px">使用 '+c.usage_count+' 次 · v'+c.version+'</span><p style="color:#aaa;margin:12px 0;line-height:1.6">'+esc(c.description)+'</p><div style="margin-bottom:16px">'+(tags||[]).map(t=>'<span class="tag" style="margin-right:4px">'+esc(t)+'</span>').join('')+'</div>'+
    '<div class="detail-actions">'+
    '<button class="btn btn-sm btn-primary" onclick="openEditTags()">编辑标签</button>'+
    '<button class="btn btn-sm btn-warning" onclick="openEditGenes()">编辑基因</button>'+
    '<button class="btn btn-sm btn-success" onclick="openEvolve()">进化胶囊</button>'+
    '<button class="btn btn-sm btn-danger" onclick="deleteCapsule()">删除胶囊</button>'+
    '</div>'+
    '<h3 style="color:#7b68ee;margin-bottom:12px;font-size:16px">基因 ('+c.genes.length+')</h3>'+
    c.genes.map(g=>'<div class="gene"><div class="gene-title">'+esc(g.title)+'<span class="gene-type">'+g.gene_type+'</span></div><div class="gene-content">'+esc(g.content)+'</div></div>').join('');
  document.getElementById('modal').classList.add('show');
}
function closeModal(){document.getElementById('modal').classList.remove('show')}
function esc(s){if(!s)return'';return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function toast(msg,type){
  const c=document.getElementById('toasts');
  const d=document.createElement('div');d.className='toast '+type;d.textContent=msg;c.appendChild(d);
  setTimeout(()=>{d.remove()},3000);
}
async function apiPost(path,data){
  const r=await fetch(path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
  return r.json();
}
async function apiPut(path,data){
  const r=await fetch(path,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
  return r.json();
}
async function apiDelete(path){
  const r=await fetch(path,{method:'DELETE'});
  return r.json();
}
let createGeneIdx=0;
function openCreateModal(){createGeneIdx=0;document.getElementById('c-name').value='';document.getElementById('c-desc').value='';document.getElementById('c-domain').value='';document.getElementById('c-tags').value='';document.getElementById('c-genes').innerHTML='';addCreateGene();document.getElementById('createModal').classList.add('show')}
function closeCreateModal(){document.getElementById('createModal').classList.remove('show')}
function geneEditorHtml(prefix,idx,g){
  return '<div class="gene-editor" id="'+prefix+'-'+idx+'"><button class="gene-remove" onclick="this.parentElement.remove()">&times;</button>'+
    '<div class="form-group"><label>标题</label><input class="ge-title" value="'+esc(g?.title||'')+'"></div>'+
    '<div class="form-group"><label>内容</label><textarea class="ge-content">'+(g?.content?esc(g.content):'')+'</textarea></div>'+
    '<div class="form-group"><label>类型</label><select class="ge-type">'+
    ['pattern','config','snippet','principle','checklist'].map(t=>'<option value="'+t+'"'+(g?.gene_type===t?' selected':'')+'>'+t+'</option>').join('')+
    '</select></div></div>';
}
function addCreateGene(){document.getElementById('c-genes').insertAdjacentHTML('beforeend',geneEditorHtml('cg',createGeneIdx++,null))}
function collectGenes(container){
  const eds=container.querySelectorAll('.gene-editor');
  const genes=[];
  eds.forEach(e=>{
    const title=e.querySelector('.ge-title').value.trim();
    const content=e.querySelector('.ge-content').value.trim();
    const gene_type=e.querySelector('.ge-type').value;
    if(title&&content)genes.push({title,content,gene_type});
  });
  return genes;
}
async function submitCreate(){
  const name=document.getElementById('c-name').value.trim();
  const description=document.getElementById('c-desc').value.trim();
  const domain=document.getElementById('c-domain').value.trim();
  const tagsStr=document.getElementById('c-tags').value.trim();
  if(!name||!description||!domain){toast('请填写名称、描述和领域','error');return}
  const tags=tagsStr?tagsStr.split(',').map(t=>t.trim()).filter(Boolean):[];
  const genes=collectGenes(document.getElementById('c-genes'));
  if(!genes.length){toast('请至少添加一个基因','error');return}
  const res=await apiPost('/api/capsule',{name,description,domain,tags,genes});
  if(res.id){toast('胶囊创建成功','success');closeCreateModal();init()}
  else{toast(res.error||'创建失败','error')}
}
function openEditTags(){
  const c=_dc;if(!c)return;
  const tags=typeof c.tags==='string'?JSON.parse(c.tags):c.tags;
  document.getElementById('editModalContent').innerHTML=
    '<button class="close" onclick="closeEditModal()">&times;</button><h2>编辑标签</h2>'+
    '<div class="form-group"><label>领域</label><input id="et-domain" value="'+esc(c.domain)+'"></div>'+
    '<div class="form-group"><label>标签（逗号分隔）</label><input id="et-tags" value="'+esc((tags||[]).join(', '))+'"></div>'+
    '<div class="btn-group"><button class="btn btn-primary" onclick="submitEditTags()">保存</button>'+
    '<button class="btn" style="background:#333;color:#aaa" onclick="closeEditModal()">取消</button></div>';
  document.getElementById('editModal').classList.add('show');
}
async function submitEditTags(){
  const id=_dc?.id;if(!id)return;
  const domain=document.getElementById('et-domain').value.trim();
  const tagsStr=document.getElementById('et-tags').value.trim();
  if(!domain){toast('领域不能为空','error');return}
  const tags=tagsStr?tagsStr.split(',').map(t=>t.trim()).filter(Boolean):[];
  const res=await apiPut('/api/capsule/'+id+'/tags',{domain,tags});
  if(res.success){toast('标签更新成功','success');closeEditModal();closeModal();showDetail(id);init()}
  else{toast(res.error||'更新失败','error')}
}
let editGeneIdx=0;
function openEditGenes(){
  const c=_dc;if(!c)return;
  const genes=c.genes||[];editGeneIdx=genes.length;
  let html='<button class="close" onclick="closeEditModal()">&times;</button><h2>编辑基因</h2>'+
    '<div id="eg-list">'+genes.map((g,i)=>geneEditorHtml('eg',i,g)).join('')+'</div>'+
    '<button class="btn btn-sm btn-primary" style="margin:12px 0" onclick="addEditGene()">+ 添加基因</button>'+
    '<div class="btn-group"><button class="btn btn-primary" onclick="submitEditGenes()">保存</button>'+
    '<button class="btn" style="background:#333;color:#aaa" onclick="closeEditModal()">取消</button></div>';
  document.getElementById('editModalContent').innerHTML=html;
  document.getElementById('editModal').classList.add('show');
}
function addEditGene(){document.getElementById('eg-list').insertAdjacentHTML('beforeend',geneEditorHtml('eg',editGeneIdx++,null))}
async function submitEditGenes(){
  const id=_dc?.id;if(!id)return;
  const genes=collectGenes(document.getElementById('eg-list'));
  if(!genes.length){toast('请至少保留一个基因','error');return}
  const res=await apiPut('/api/capsule/'+id+'/genes',{genes});
  if(res.success){toast('基因更新成功','success');closeEditModal();closeModal();showDetail(id)}
  else{toast(res.error||'更新失败','error')}
}
function openEvolve(){
  const c=_dc;if(!c)return;
  document.getElementById('editModalContent').innerHTML=
    '<button class="close" onclick="closeEditModal()">&times;</button><h2>进化胶囊</h2>'+
    '<div class="form-group"><label>反馈类型</label><select id="ev-type"><option value="improve">改进 (improve)</option><option value="fix">修复 (fix)</option><option value="extend">扩展 (extend)</option></select></div>'+
    '<div class="form-group"><label>描述</label><textarea id="ev-desc" placeholder="描述进化内容..."></textarea></div>'+
    '<h3 style="color:#7b68ee;margin-bottom:12px;font-size:16px">新增基因（可选）<button class="btn btn-sm btn-primary" onclick="addEvolveGene()">+ 添加</button></h3>'+
    '<div id="ev-genes"></div>'+
    '<div class="btn-group"><button class="btn btn-success" onclick="submitEvolve()">提交进化</button>'+
    '<button class="btn" style="background:#333;color:#aaa" onclick="closeEditModal()">取消</button></div>';
  document.getElementById('editModal').classList.add('show');
}
let evolveGeneIdx=0;
function addEvolveGene(){document.getElementById('ev-genes').insertAdjacentHTML('beforeend',geneEditorHtml('evg',evolveGeneIdx++,null))}
async function submitEvolve(){
  const id=_dc?.id;if(!id)return;
  const feedback_type=document.getElementById('ev-type').value;
  const description=document.getElementById('ev-desc').value.trim();
  if(!description){toast('请填写描述','error');return}
  const new_genes=collectGenes(document.getElementById('ev-genes'));
  const res=await apiPost('/api/capsule/'+id+'/evolve',{capsule_id:id,feedback_type,description,new_genes:new_genes.length?new_genes:undefined});
  if(res.success){toast('进化成功','success');closeEditModal();closeModal();showDetail(id);init()}
  else{toast(res.error||'进化失败','error')}
}
async function deleteCapsule(){
  const id=_dc?.id;if(!id)return;
  if(!confirm('确定要删除这个胶囊吗？此操作不可撤销。'))return;
  const res=await apiDelete('/api/capsule/'+id);
  if(res.success){toast('胶囊已删除','success');closeModal();init();loadPage()}
  else{toast(res.error||'删除失败','error')}
}
function closeEditModal(){document.getElementById('editModal').classList.remove('show')}
document.getElementById('q').addEventListener('keydown',e=>{if(e.key==='Enter')doSearch()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
init();
</script>
</body>
</html>`;

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://localhost:${PORT}`);
  const method = req.method || "GET";

  try {
    // GET routes
    if (method === "GET") {
      if (url.pathname === "/api/stats") {
        return jsonRes(res, 200, getStats());
      } else if (url.pathname === "/api/search") {
        const q = url.searchParams.get("q") || "";
        const limit = parseInt(url.searchParams.get("limit") || "30");
        return jsonRes(res, 200, searchCapsules(q, limit));
      } else if (url.pathname === "/api/list") {
        const domain = url.searchParams.get("domain") || "all";
        const page = parseInt(url.searchParams.get("page") || "1");
        const limit = parseInt(url.searchParams.get("limit") || "24");
        return jsonRes(res, 200, listCapsules(domain, page, limit));
      } else if (url.pathname.startsWith("/api/capsule/")) {
        const id = url.pathname.replace("/api/capsule/", "");
        const capsule = getCapsule(id);
        return jsonRes(res, capsule ? 200 : 404, capsule || { error: "not found" });
      } else {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        return res.end(HTML);
      }
    }

    // POST /api/capsule - 创建新胶囊
    if (method === "POST" && url.pathname === "/api/capsule") {
      const body = await parseBody(req);
      if (!body.name || !body.description || !body.domain || !body.genes?.length) {
        return jsonRes(res, 400, { error: "缺少必填字段: name, description, domain, genes" });
      }
      const id = contributeCapsule({
        name: body.name,
        description: body.description,
        domain: body.domain,
        tags: body.tags || [],
        genes: body.genes,
        version: 1,
        usage_count: 0,
        rating: 0,
      });
      return jsonRes(res, 201, { id, success: true });
    }

    // POST /api/capsule/:id/evolve - 进化胶囊
    if (method === "POST" && url.pathname.match(/^\/api\/capsule\/[^/]+\/evolve$/)) {
      const id = url.pathname.split("/")[3];
      const body = await parseBody(req);
      if (!body.feedback_type || !body.description) {
        return jsonRes(res, 400, { error: "缺少必填字段: feedback_type, description" });
      }
      const ok = evolveCapsule({
        capsule_id: id,
        feedback_type: body.feedback_type,
        description: body.description,
        new_genes: body.new_genes,
      });
      return jsonRes(res, ok ? 200 : 404, ok ? { success: true } : { error: "胶囊不存在" });
    }

    // PUT /api/capsule/:id/tags - 更新标签
    if (method === "PUT" && url.pathname.match(/^\/api\/capsule\/[^/]+\/tags$/)) {
      const id = url.pathname.split("/")[3];
      const body = await parseBody(req);
      if (!body.domain) {
        return jsonRes(res, 400, { error: "缺少必填字段: domain" });
      }
      const ok = updateCapsuleTags(id, body.domain, body.tags || []);
      return jsonRes(res, ok ? 200 : 404, ok ? { success: true } : { error: "胶囊不存在" });
    }

    // PUT /api/capsule/:id/genes - 更新基因
    if (method === "PUT" && url.pathname.match(/^\/api\/capsule\/[^/]+\/genes$/)) {
      const id = url.pathname.split("/")[3];
      const body = await parseBody(req);
      if (!body.genes?.length) {
        return jsonRes(res, 400, { error: "缺少必填字段: genes" });
      }
      const ok = updateCapsuleGenes(id, body.genes);
      return jsonRes(res, ok ? 200 : 404, ok ? { success: true } : { error: "胶囊不存在" });
    }

    // DELETE /api/capsule/:id - 删除胶囊
    if (method === "DELETE" && url.pathname.match(/^\/api\/capsule\/[^/]+$/)) {
      const id = url.pathname.split("/")[3];
      const db = getDb();
      const r = db.prepare("DELETE FROM capsules WHERE id = ?").run(id);
      return jsonRes(res, r.changes > 0 ? 200 : 404, r.changes > 0 ? { success: true } : { error: "胶囊不存在" });
    }

    jsonRes(res, 404, { error: "not found" });
  } catch (e: any) {
    jsonRes(res, 500, { error: e.message || "服务器错误" });
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`\n🧬 SkillGene Web UI 已启动`);
  console.log(`   地址: http://localhost:${PORT}`);
  console.log(`   按 Ctrl+C 停止\n`);
});

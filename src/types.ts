import { z } from "zod";

// Gene - 原子能力单元
export const GeneSchema = z.object({
  id: z.string().optional(),
  capsule_id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  gene_type: z.enum(["pattern", "config", "snippet", "principle", "checklist"]),
  order_index: z.number().optional(),
});
export type Gene = z.infer<typeof GeneSchema>;

// Capsule - 完整能力胶囊
export const CapsuleSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  domain: z.string(),
  tags: z.array(z.string()),
  genes: z.array(GeneSchema),
  version: z.number().default(1),
  usage_count: z.number().default(0),
  rating: z.number().default(0),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
});
export type Capsule = z.infer<typeof CapsuleSchema>;

// 搜索结果
export interface SearchResult {
  id: string;
  name: string;
  description: string;
  domain: string;
  tags: string[];
  rating: number;
  usage_count: number;
  rank: number;
}

// 进化反馈
export const EvolveFeedbackSchema = z.object({
  capsule_id: z.string(),
  feedback_type: z.enum(["improve", "fix", "extend"]),
  description: z.string(),
  new_genes: z.array(GeneSchema).optional(),
});
export type EvolveFeedback = z.infer<typeof EvolveFeedbackSchema>;

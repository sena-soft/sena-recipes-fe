import { z } from "zod";
import { CategoriesAPIResponseSchema, SearchFilresSchema } from "../schemas/recipesSchema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilters = z.infer<typeof SearchFilresSchema>;
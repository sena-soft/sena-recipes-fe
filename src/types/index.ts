import { z } from "zod";
import { CategoriesAPIResponseSchema, MealsAPIResponseSchema, SearchFilresSchema } from "../schemas/recipesSchema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilters = z.infer<typeof SearchFilresSchema>;
export type Meals = z.infer<typeof MealsAPIResponseSchema>;
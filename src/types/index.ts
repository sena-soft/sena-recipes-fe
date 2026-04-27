import { z } from "zod";
import { CategoriesAPIResponseSchema, MealAPIResponse, MealsAPIResponseSchema, RecipeAPIResponseSchema, SearchFilresSchema } from "../schemas/recipesSchema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilters = z.infer<typeof SearchFilresSchema>;
export type Meals = z.infer<typeof MealsAPIResponseSchema>;
export type Meal = z.infer<typeof MealAPIResponse>;
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;
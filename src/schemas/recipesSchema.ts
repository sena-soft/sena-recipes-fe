import {z} from "zod";

export const CategoriesAPIResponseSchema = z.object({
    categories: z.array(
        z.object({
            idCategory: z.string(),
            strCategory: z.string(),
            strCategoryThumb: z.string(),
            strCategoryDescription: z.string(),
        })
    )
});

export const SearchFilresSchema = z.object({
    query: z.string(),
    category: z.string(),
})

export const MealAPIResponse = z.object({
    idMeal: z.string(),
    strMeal: z.string(),
    strMealThumb: z.string(),
});

export const MealsAPIResponseSchema = z.object({
    meals: z.array(MealAPIResponse)
});
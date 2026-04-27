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


export const RecipeAPIResponseSchema = z.object({
  idMeal: z.string(),
  strMeal: z.string(),
  strMealThumb: z.string(),
  strInstructions: z.string(),
  strIngredient1: z.string().nullable(),
  strIngredient2: z.string().nullable(),
  strIngredient3: z.string().nullable(),
  strIngredient4: z.string().nullable(),
  strIngredient5: z.string().nullable(),
  strIngredient6: z.string().nullable(),
  strMeasure1: z.string().nullable(),
  strMeasure2: z.string().nullable(),
  strMeasure3: z.string().nullable(),
  strMeasure4: z.string().nullable(),
  strMeasure5: z.string().nullable(),
  strMeasure6: z.string().nullable(),
});
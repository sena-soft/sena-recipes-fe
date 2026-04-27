import axios from "axios";
import { CategoriesAPIResponseSchema, MealsAPIResponseSchema, RecipeAPIResponseSchema } from "../schemas/recipesSchema";
import type { Categories, SearchFilters } from "../types";

const BASE_URL = 'https://www.themealdb.com/api/json/v2/1';

export const fetchCategories = async (): Promise<Categories> => {
    const url = `${BASE_URL}/categories.php`;
    const { data } = await axios.get(url);
    const result = CategoriesAPIResponseSchema.safeParse(data);
    if (result.success) {
        return result.data;
    } 
};

export const searchRecipes = async (searchFilters: SearchFilters) => {
    const { query, category } = searchFilters;
    const url = `${BASE_URL}/filter.php?i=${query}&c=${category}`;
    const { data } = await axios.get(url);
    const result = MealsAPIResponseSchema.safeParse(data);
    if (result.success) {
        return result.data;
    }
};

export const fetchRecipeById = async (id: string) => {
    const url = `${BASE_URL}/lookup.php?i=${id}`;
    const { data } = await axios.get(url);
    const result = RecipeAPIResponseSchema.safeParse(data.meals[0]);
    if (result.success) {
        return result.data;
    }
};


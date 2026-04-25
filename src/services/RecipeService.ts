import axios from "axios";
import { CategoriesAPIResponseSchema, MealsAPIResponseSchema } from "../schemas/recipesSchema";
import type { Categories, SearchFilters } from "../types";

export const fetchCategories = async (): Promise<Categories> => {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const { data } = await axios.get(url);
    const result = CategoriesAPIResponseSchema.safeParse(data);
    if (result.success) {
        return result.data;
    } 
};

export const searchRecipes = async (searchFilters: SearchFilters) => {
    const { query, category } = searchFilters;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}&c=${category}`;
    const { data } = await axios.get(url);
    const result = MealsAPIResponseSchema.safeParse(data);
    if (result.success) {
        return result.data;
    }
};


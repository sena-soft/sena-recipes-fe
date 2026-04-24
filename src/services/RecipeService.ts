import axios from "axios";
import { CategoriesAPIResponseSchema } from "../schemas/recipesSchema";
import type { Categories } from "../types";

export const fetchCategories = async (): Promise<Categories> => {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const { data } = await axios.get(url);
    const result = CategoriesAPIResponseSchema.safeParse(data);
    if (result.success) {
        return result.data;
    } 
}
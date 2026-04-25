import type { StateCreator } from "zustand";
import { fetchCategories, searchRecipes } from "../services/RecipeService";
import type { Categories, Meals, SearchFilters } from "../types";

export type RecipeType = {
    categories: Categories;
    meals: Meals; 
    fetchCategories: () => Promise<void>;
    searchRecipes: (searchFilters: SearchFilters) => Promise<void>;
}

export const recipeSlice: StateCreator<RecipeType> = (set) => ({
  categories: {
    categories: []
  },
  meals: {
    meals: []
  },
  fetchCategories: async () => {
    const categories = await fetchCategories();
    set({ categories });
  },
  searchRecipes: async (searchFilters) => {
    const results = await searchRecipes(searchFilters);
    set({ meals: results });
  }
});

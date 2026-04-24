import type { StateCreator } from "zustand";
import { fetchCategories } from "../services/RecipeService";
import type { Categories, SearchFilters } from "../types";

export type RecipeType = {
    categories: Categories;
    fetchCategories: () => Promise<void>;
    searchRecipes: (searchFilters: SearchFilters) => Promise<void>;
}

export const recipeSlice: StateCreator<RecipeType> = (set) => ({
  categories: {
    categories: []
  },
  fetchCategories: async () => {
    const categories = await fetchCategories();
    set({ categories });
  },
  searchRecipes: async (searchFilters) => {
    // Implement search logic here, e.g., fetch recipes based on query and category
    console.log("Searching for recipes with filters:", searchFilters);
  }
});

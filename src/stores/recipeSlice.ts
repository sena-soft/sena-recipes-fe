import type { StateCreator } from "zustand";
import { fetchCategories, fetchRecipeById, searchRecipes } from "../services/RecipeService";
import type { Categories, Meals, Recipe, SearchFilters } from "../types";

export type RecipeType = {
    categories: Categories;
    meals: Meals;
    selectedRecipe: Recipe;
    fetchCategories: () => Promise<void>;
    searchRecipes: (searchFilters: SearchFilters) => Promise<void>;
    getRecipe: (id: string) => Promise<void>;
}

export const recipeSlice: StateCreator<RecipeType> = (set) => ({
  categories: {
    categories: []
  },
  meals: {
    meals: []
  },
  selectedRecipe: {} as Recipe,
  fetchCategories: async () => {
    const categories = await fetchCategories();
    set({ categories });
  },
  searchRecipes: async (searchFilters) => {
    const results = await searchRecipes(searchFilters);
    set({ meals: results });
  },
  getRecipe: async (id) => {
    const recipe = await fetchRecipeById(id);
    set({ selectedRecipe: recipe });
  }
});

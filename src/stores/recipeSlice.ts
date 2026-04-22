import type { StateCreator } from "zustand";

type Category = {
    id: string;
    name: string;
}

export type RecipeType = {
    categories: Category[]
}

export const recipeSlice: StateCreator<RecipeType> = () => ({
  categories: []
});

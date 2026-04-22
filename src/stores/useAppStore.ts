import {create} from "zustand";
import {recipeSlice, type RecipeType} from "./recipeSlice";

export const useAppStore = create<RecipeType>((...a) => ({
  ...recipeSlice(...a),
}));

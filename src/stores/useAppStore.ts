import {create} from "zustand";
import { devtools } from "zustand/middleware";
import {recipeSlice, type RecipeType} from "./recipeSlice";

export const useAppStore = create<RecipeType>()(devtools((...a) => ({
  ...recipeSlice(...a),
})));

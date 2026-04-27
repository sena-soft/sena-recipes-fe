import { useAppStore } from "../stores/useAppStore";
import type { Meal } from "../types";

type MealCardProps = {
  meal: Meal;
};

function MealCard({ meal }: MealCardProps) {
    const getRecipe = useAppStore((state) => state.getRecipe);
    const handleClick = () => {
      getRecipe(meal.idMeal);
    }
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="p-5 flex items-center justify-around gap-5">
        <div className="w-100 overflow-hidden">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="hover:scale-125 transition-transform" />
        </div>
        <div className="flex flex-col text-center gap-5 w-100">
          <h3 className="truncate font-black">{meal.strMeal}</h3>
          <button
            onClick={handleClick}
            className="w-full cursor-pointer bg-amber-500 text-white rounded-lg p-3 font-bold hover:bg-amber-600 transition-colors"
          >
            See more
          </button>
        </div>
      </div>
    </div>
  );
}

export default MealCard;

import { Ingredient } from "@/types/ingredients";
import React from "react";

interface IngredientListProps {
  ingredients: Ingredient[];
}

const IngredientList: React.FC<IngredientListProps> = ({ ingredients }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {ingredients.map((ingredient) => (
        <div
          className="p-5 rounded-md bg-green-300 cursor-pointer"
          key={ingredient.idIngredient}
        >
          <h2 className="font-bold">{ingredient.strIngredient}</h2>
        </div>
      ))}
    </div>
  );
};

export default IngredientList;

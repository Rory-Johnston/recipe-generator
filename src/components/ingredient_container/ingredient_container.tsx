"use client";

import React, { useState, useMemo } from "react";
import { Ingredient } from "@/types/ingredients";
import IngredientList from "../ingredient_list/ingredient_list";
import IngredientSearch from "../ingredient_search/ingredient_search";

interface IngredientContainerProps {
  ingredients: Ingredient[];
}

const IngredientContainer: React.FC<IngredientContainerProps> = ({
  ingredients,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIngredients = useMemo(() => {
    return ingredients.filter((ingredient) =>
      ingredient.strIngredient.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, ingredients]);

  return (
    <div>
      <IngredientSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <IngredientList ingredients={filteredIngredients} />
    </div>
  );
};

export default IngredientContainer;

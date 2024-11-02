export interface Ingredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string | null;
}

export interface IngredientsResponse {
  meals: Ingredient[];
}

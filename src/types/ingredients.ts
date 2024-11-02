export interface Ingredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string | null;
  slug?: string;
}

export interface IngredientsResponse {
  meals: Ingredient[];
}

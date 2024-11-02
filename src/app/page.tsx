import IngredientList from "@/components/ingredient_list/ingredient_list";
import { IngredientsResponse, Ingredient } from "@/types/ingredients";

export default async function Home() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const res = await fetch(`${API_BASE_URL}/list.php?i=list`, {
    cache: "force-cache",
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch ingredients");
  }

  const data: IngredientsResponse = await res.json();
  const ingredients: Ingredient[] = data.meals;

  return (
    <div className="flex justify-items align-items w-full">
      <title>Ingredients - Recipe Generator</title>
      <meta
        name="description"
        content="List of all ingredients available for your recipes."
      />
      <div className="flex justify-center items-center w-full min-h-screen bg-gray-100">
        <div className="text-black max-w-[1200px] p-6 bg-white shadow-md rounded">
          <h1 className="text-3xl font-bold mb-6">Ingredients</h1>
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}

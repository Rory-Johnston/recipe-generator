import Head from "next/head";
import { IngredientsResponse, Ingredient } from "@/types/ingredients";
import IngredientContainer from "@/components/ingredient_container/ingredient_container";

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
    <>
      <Head>
        <title>Ingredients - Recipe Generator</title>
        <meta
          name="description"
          content="List of all ingredients available for your recipes."
        />
      </Head>
      <div className="flex justify-center items-center bg-gray-100">
        <div className="text-black max-w-[1200px] w-full min-h-screen p-6 bg-white shadow-md rounded">
          <h1 className="text-3xl font-bold mb-6">Ingredients</h1>
          <IngredientContainer ingredients={ingredients} />
        </div>
      </div>
    </>
  );
}

import MealList from "@/components/meal_list/meal_list";
import Link from "next/link";
import React from "react";

async function Ingredient({ params }: { params: Promise<{ slug: string }> }) {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const slug = (await params).slug;
  const res = await fetch(`${API_BASE_URL}/filter.php?i=${slug}`, {
    cache: "force-cache",
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch ingredients");
  }

  const data = await res.json();
  const meals = data.meals;

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="text-black max-w-[1200px] w-full min-h-screen p-6 bg-white shadow-md rounded">
        <div className="flex justify-between align-items justify-items mb-6">
          <h1 className="text-4xl font-bold">{slug.toLocaleUpperCase()}</h1>
          <Link
            className="px-3 py-2 bg-gray-400 rounded-3xl font-bold hover:scale-105 cursor-pointer transition transition-300"
            href={"/"}
          >
            BACK
          </Link>
        </div>

        <MealList meals={meals} />
      </div>
    </div>
  );
}

export default Ingredient;

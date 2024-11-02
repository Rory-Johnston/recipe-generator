import { Ingredient } from "@/types/ingredients";
import { slugify } from "@/utils/slug";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IngredientListProps {
  ingredients: Ingredient[];
}

const IMAGE_URL = process.env.NEXT_PUBLIC_INGREDIENT_IMAGE_URL;

const IngredientList: React.FC<IngredientListProps> = ({ ingredients }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {ingredients.map((ingredient) => {
        const slug = slugify(ingredient.strIngredient);
        return (
          <Link href={`/ingredients/${slug}`} key={ingredient.idIngredient}>
            <div className="p-5 rounded-md bg-green-300 cursor-pointer hover:bg-green-400 transition-colors">
              <Image
                src={`${IMAGE_URL}/${ingredient.strIngredient}.png`}
                alt={ingredient.strIngredient}
                width={500}
                height={500}
                className="object-cover"
              />
              <h2 className="font-bold mt-2">{ingredient.strIngredient}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default IngredientList;

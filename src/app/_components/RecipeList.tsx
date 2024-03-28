/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import Image from "next/image";
import Link from "next/link";

//Components

interface Recipe {
   strMealThumb: string;
   strMeal: string;
   idMeal: string;
}
const RecipeList: React.FC<RecipeListProps> = ({ recipes, type }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 overflow-y-auto server">
      {recipes?.map((recipe, idx) => {
        return (
          <div
            className="rounded bg-slate-300 overflow-hidden server card"
            key={idx}
          >
            <Image
              alt="Recipe"
              width={500}
              height={500}
              src={recipe.strMealThumb}
              className="w-full"
            />
            <div className="p-5">
              <h2 className="font-bold text-2xl">{recipe.strMeal}</h2>
              <div className="flex justify-between">
                <Link href={`/types/${type}/${recipe.idMeal}`}>
                  <button className="text-white bg-pink-500 rounded py-1 px-3 mt-5 hover:bg-blue-600">
                    Get Recipe Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default RecipeList;
interface RecipeListProps {
    recipes: Recipe[];
    type: string;
}

'use client'


import React, { FC, useEffect, useState } from "react";

//components
import RecipeList from "../../_components/RecipeList";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface RecipesResponse {
  meals: Recipe[];
}

interface Params {
  type: string;
}

interface RecipeListContainerProps {
  params: Params;
}

async function getRecipes(type = "indian"): Promise<RecipesResponse> {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const response: RecipesResponse = await res.json();
  return response;
}

const RecipeListContainer: FC<RecipeListContainerProps> = ({ params }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    getRecipes(params.type).then((response) => {
      setRecipes(response.meals);
    }).catch((error) => {
      console.error('Error fetching recipes:', error);
    });
  }, [params.type]);

  return <RecipeList recipes={recipes} type={params.type || ""} />;
};

export default RecipeListContainer;
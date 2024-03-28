

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";

async function getRecipeDetails(id: string) {
  // await new Promise((r) => setTimeout(r, 5000));
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const recipeDetails = await getRecipeDetails(params.id);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const details = recipeDetails.meals[0];
  const ingredients = Object.keys(details)
    .filter((key) => key.indexOf("Ingredient") > 0)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    .map((ingKey) => (details[ingKey]?.length ? details[ingKey] : undefined))
    .filter(Boolean);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <Image
          alt="Recipe"
          width={500}
          height={500}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          src={details.strMealThumb}
          className="w-full"
        />
      </div>
      <div className="p-5">
        <h1>
          Recipe Name:{" "}
          <span className="font-bold text-2xl">{details.strMeal}</span>
        </h1>

        <div className="tags mt-3">
          <p className="mb-3">Ingredients List:</p>
          {ingredients.map((tag, i) => (
            <span
              key={i}
              className="bg-pink-500 text-white px-2 py-1 inline-block rounded mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="tags mt-3">
          <span>Video Link: </span>
          <a
            className="text-pink-500"
            target="_blank"
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            href={details.strYoutube}
            rel="noreferrer"
          >
            How to make {details.strMeal}
          </a>
        </div>
      </div>
    </div>
  );
}

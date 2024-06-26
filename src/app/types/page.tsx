'use client'

import React from "react";
import Link from "next/link";

interface MealArea {
   strArea: string;
}

interface MealResponse {
   meals: MealArea[];
}
const fetchRecipeAreas = async (): Promise<string[]> => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const response: MealResponse = await res.json();
  return response.meals.map((area: { strArea: string }) => area.strArea);
};

const Page: React.FC = () => {
  const [areas, setAreas] = React.useState<string[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const areasData = await fetchRecipeAreas();
      setAreas(areasData);
    };

    void fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 server">
    {areas.map((area: string, idx: number) => (
      <div key={idx}>
        <Link href={`/types/${area}`}>
          <div className="server shadow-gray-50 bg-gray-300 capitalize text-center rounded text-2xl py-10 cursor-pointer font-bold hover:bg-pink-500 hover:text-white">
            {area}
          </div>
        </Link>
      </div>
    ))}
  </div>
  );
};

export default Page;

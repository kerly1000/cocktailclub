import { useEffect, useState } from "react";
import { getRandomCocktail } from "../services/api";
import { Drink } from "../types/Drink";

function Home() {
  const [drink, setDrink] = useState<Drink | null>(null);

  useEffect(() => {
    getRandomCocktail().then(setDrink);
  }, []);

  if (!drink) return <p>Loading...</p>;

  return (
    <div>
      <h1>{drink.strDrink}</h1>
      <img src={drink.strDrinkThumb} width="200" />
      <p>{drink.strInstructions}</p>
    </div>
  );
}

export default Home;
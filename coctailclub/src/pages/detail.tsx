import { useLocation } from "react-router-dom";
import { Drink } from "../types/Drink";

function Detail() {
  const location = useLocation();
  const drink = location.state?.drink as Drink;

  if (!drink) return <p>No data</p>;

  return (
    <div>
      <h1>{drink.name}</h1>

      <h3>Ingredients:</h3>
      <ul>
        {drink.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <p>{drink.instructions}</p>
    </div>
  );
}

export default Detail;
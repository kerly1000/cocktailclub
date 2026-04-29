import { useState } from "react";
import { searchCocktails } from "../services/api";
import { Drink } from "../types/drinks";
import { Link } from "react-router-dom";

<Link to="/detail" state={{ drink }}>
  {drink.name}
</Link>

function List() {
  const [query, setQuery] = useState("");
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setError("");
      const data = await searchCocktails(query);
      setDrinks(data);
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div>
      <h1>Search Cocktails</h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search cocktail..."
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}

      {drinks.map((drink, index) => (
        <div key={index}>
          <h3>{drink.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default List;
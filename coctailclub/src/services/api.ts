import { Drink } from "../types/Drink";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const getRandomCocktail = async (): Promise<Drink> => {
  const res = await fetch(`${BASE_URL}/random.php`);
  const data = await res.json();
  return data.drinks[0];
};

export const searchCocktails = async (query: string): Promise<Drink[]> => {
  const res = await fetch(`${BASE_URL}/search.php?s=${query}`);
  const data = await res.json();
  return data.drinks || [];
};

export const getCocktailById = async (id: string): Promise<Drink> => {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const data = await res.json();
  return data.drinks[0];
};
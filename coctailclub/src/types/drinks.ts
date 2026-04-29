export interface Drink {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strInstructions: string;
    strAlcoholic?: string;
  
    [key: string]: any; // ingredientide jaoks
  }

export interface Drink {
    name: string;
    ingredients: string[];
    instructions: string;
  }
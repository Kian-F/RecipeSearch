import React, { useEffect, useState } from "react";
import Recipe from "./containers/Recipe";

const Api = (props) => {
  console.log(props)
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, [props.query]);

  const fetchRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${props.query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe
          title={recipe.recipe.label}
          Calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
        />
      ))}
    </div>

    /* <h3>Name: {props.label}</h3>; */
  );
};
export default Api;

import React, { useEffect, useState } from "react";
import Recipe from "./containers/Recipe";

const Api = (props) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);


  const fetchRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
   setRecipes(data.hits)
    console.log(data);
  };

return (
<div>{recipes.map(recipe =>(
  <Recipe title={recipe.recipe.label} Calories={recipe.recipe.calories} image={recipe.recipe.image}/>
))}</div>
    
/* <h3>Name: {props.label}</h3>; */

);
}
export default Api;

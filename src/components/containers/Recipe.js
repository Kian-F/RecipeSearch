import React from "react";
import style from './recipe.module.css'

const Recipe = ({title, calories, image,ingredientLines}) => {
  return (
    <div className={style.recipe}>
      <h3>{title}</h3>
      <p>{calories}</p>
      <ol>
         
              {ingredientLines.map(ingredient =>(
                  <li>{ingredient}</li>
              ))}
         
      </ol>
      <img src={image} alt="Recipe"></img>
    </div>
  );
};

export default Recipe;

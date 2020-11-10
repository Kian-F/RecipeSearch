import React from "react";

const Recipe = ({title, calories, image,ingredientLines}) => {
  return (
    <div>
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

import React from "react";

const Recipe = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.Calories}</p>
      <img src={props.image} alt="Recipe"></img>
    </div>
  );
};

export default Recipe;

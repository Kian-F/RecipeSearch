import React, { useEffect, useState } from "react";




const Api = () => {

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
    );
    const data =await response.json();
    console.log(data);
  };

  return(
      <h1>API</h1>
  )
};

export default Api;

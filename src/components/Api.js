import React, { useEffect, useState } from "react";




const Api = () => {
   
    
  const Api_id = process.env.REACT_APP_API_ID;
  const Api_key = process.env.REACT_APP_API_KEY;
  let sample = process.env.REACT_APP_Sample;
    console.log(process.env.REACT_APP_Sample)
  console.log(process.env.REACT_APP_API_ID)

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${Api_id}&app_key=${Api_key}`
    );
    const data =await response.json();
    console.log(data);
  };

  return(
      <h1>API</h1>
  )
};

export default Api;

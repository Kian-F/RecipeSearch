import React from 'react';
import Api from './components/Api'
import Recipes from './components/containers/Recipe'
import './App.css';


function App() {
  
  return (
    <div className="App">
       <Api/>
      <form className='search-form'>
        <input className='search-bar' type="text"/>
        <button className='search-button' type='submit'>Search</button>
      </form>
    
    </div>
  );
  
}

export default App;

import React from 'react';
import Api from './components/Api'
import './App.css';
require('dotenv').config();

function App() {
  
  return (
    <div className="App">
      <Api/>
      <form className='search-form'>
        <input className='search-bar' type="text"/>
        <button className='search-button' type='submit'></button>
      </form>
    
    </div>
  );
  
}

export default App;

import React from 'react';
import Api from './components/Api'
import './App.css';


function App() {
  
  return (
    <div className="App">
       {Api.map((a)=>(
         <a.label/>
       ))}
      <form className='search-form'>
        <input className='search-bar' type="text"/>
        <button className='search-button' type='submit'></button>
      </form>
    
    </div>
  );
  
}

export default App;

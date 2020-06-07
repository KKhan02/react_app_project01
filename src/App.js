import React from 'react';
import './App.css';
import Hello from './Hello';


//const hello = () => "Hello World"

/* we can also do

const hello = ({name}) => {
  
  return "Hello World"
}
*/ 

function App({name,age}) {
  //this will destructure the property given as argument.
  return <div>
      Hello from App.js <strong>{name} </strong> Age ={age}
      <div>Another Tree</div>
      <Hello firstName = {name} ></Hello>
      </div>
}

export default App;

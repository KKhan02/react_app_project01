import React from 'react';
import './App.css';
import Hello from './Hello';
import Page from './Page';
import {BrowserRouter, Route} from "react-router-dom";

//const hello = () => "Hello World"

/* we can also do

const hello = ({name}) => {
  
  return "Hello World"
}
*/ 

function App({name,age}) {
  //this will destructure the property given as argument.
  return (<div>
  
      </div>
  );
}

export default App;

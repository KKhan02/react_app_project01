import React from 'react';
import './Hello.css'

function Hello({firstName,age}) {
  return <fieldset className="end">
    <legend className="legendcolor"><font size = "4.5">Form Details </font></legend>
      <p> This basic HTML form is created by <strong>{firstName}</strong> ({age-1}), an undergraduate student of <em>NED University of Engineering and Technology</em>.
      <br/>
      A programming enthusiast and OpenCV practioner, currently a student in the most prestigious skill development program in <em>Pakistan, </em>
      <strong>PIAIC</strong> as an IOT and AIC student.</p>
    </fieldset> 
}

export default Hello;

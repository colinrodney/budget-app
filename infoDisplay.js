import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"

function infoDisplay(){
    return(
      <>
        <section>
            <div>City</div>
            <div id="cityName"></div>
        </section>
        <section>
            <div>Temp</div>
            <div id="temp"></div>
        </section>
      </>
    )
  }
  
  export { infoDisplay };
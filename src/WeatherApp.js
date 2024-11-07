// import React from 'react';
import {useState, useEffect, useMemo, useRef} from 'react';
// import useState from "react";
// import logo from './logo.svg';
import InputForm from "./InputForm"
import InfoDisplay from "./InfoDisplay"
import LoadingComponent from "./LoadingComponent"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

// DOM ELEMENTS
// let cityName = document.getElementById(`cityName`)
// let temp = document.getElementById(`temp`)


// MAIN/ PARENT WEATHER APP COMPONENT
function WeatherApp(){
  // let [zipCode, setZipCode] = useState(``);
  // let [apiResponse, setResponse] = useState({});

  // RETURN
  return (
    <>
      <InputForm />
      {/* <InfoDisplay apiResponse={apiResponse}/> */}
      
      <LoadingComponent />
      <InfoDisplay />
    </>
  ) 
}
export default WeatherApp;



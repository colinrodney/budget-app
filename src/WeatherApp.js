import React from 'react';
// import useState from "react";
// import logo from './logo.svg';
import InputForm from "./InputForm"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

// DOM ELEMENTS
// let cityName = document.getElementById(`cityName`)
// let temp = document.getElementById(`temp`)


// ZIP CODE FORM COMPONENT
function WeatherApp(){

  // let [zipCode, setZipCode] = useState("");
  // let [apiResponse, setResponse] = useState("");

  // const handleChange = (event) =>{
  //   event.preventDefault();
  //   setZipCode(event.target.value)
  //   console.log(zipCode);
  // }
  
  // const handleSubmit = (event) =>{
  //   event.preventDefault();
  //   setZipCode(event.target.value)
  //   console.log(zipCode)

  //   // call getWeather Info function sending user input zip as argument
  //   getWeatherInfo(zipCode)
  // }

  // // Get Weather Info
  // async function getWeatherInfo(zipCode){
  //   console.log(`ZIP CAPTURED IN GET WEATHER INFO FUNCTION ${zipCode}`) // logs user entered ZIP code
  //   let zip_code_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=8fcd14240be7520f5b8428765ed5943b&units=imperial`
  //   // console.log(zip_code_url)

  //   try{
  //     await fetch(zip_code_url)
  //       .then(response => response.json()) // NOTE conversion to JSON should NOT be placed in curly braces ({})
  //       .then(data =>{
  //         setResponse(data) // use setResponse to update state value apiResponse
  //         console.log(data)
  //         console.log(apiResponse);

  //       })
  //   }
  //   catch (error){
  //       console.log(error);
  //   } 
  // }

  // let x = apiResponse.main

  // return HTML via JSX
  return (
    <>
    <InputForm />
        {/* <form action="" id="searchForm" onSubmit={handleSubmit}>
            <label htmlFor="zipCode">Zip Code:</label>
            <input type="text" name="zip" id="zipCodeField" onChange={handleChange}></ input>
            <input type ="submit" value ="get weather" id="searchButton"></ input>
        </form> */}

        {/* <div>
            <p>City:{JSON.stringify(apiResponse.name)}</p>
            <p>Temp:{JSON.stringify(x)}</p>
        </div> */}
    </>

  )
}
export default WeatherApp;

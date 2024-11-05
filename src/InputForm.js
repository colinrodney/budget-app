import React from 'react';
import {useState, useEffect, useMemo, useRef} from 'react';
import InfoDisplay from './InfoDisplay';
import './App.css';

function InputForm(){
    let [zipCode, setZipCode] = useState(``);
    let [apiResponse, setResponse] = useState({});
    // let [isLoading, setIsLoading] = useState(true)
    // const previous_apiResponse = useRef(``)
    
    const handleChange = (event) =>{
        event.preventDefault();
        // console.log(event.target.value);
        setZipCode(event.target.value)
    }
    
    const handleSubmit = async (event) =>{
        event.preventDefault();
        console.log(zipCode)
        // await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=8fcd14240be7520f5b8428765ed5943b&units=imperial`)
        // .then(response => response.json())
        // .then(data => setResponse(data))
        // console.log(apiResponse)
        async function getWeatherInfo(zipCode){
            console.log(`ZIP CAPTURED IN GET WEATHER INFO FUNCTION ${zipCode}`) // logs user entered ZIP code
            
            // let zip_code_url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=8fcd14240be7520f5b8428765ed5943b`
            let zip_code_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=8fcd14240be7520f5b8428765ed5943b&units=imperial`
            
            try
            {
                // let zip_code_response =
                await fetch(zip_code_url)
                .then(response => response.json())
                .then(data => {
                    setResponse(data)
                    console.log(data)
                }
            )} catch (error){
                // weather.innerHTML = error;
                console.log(error)
            } 
        }
        getWeatherInfo(zipCode)
    }
    

    // useEffect(() =>{
    //     getWeatherInfo(zipCode)
    // },[])
    
    return(
        <>
            <form action="" id="searchForm" onSubmit={handleSubmit}>
                <label htmlFor="zipCode">Zip Code:</label>
                {/* user input field */}
                <input type="text" name="zip" id="zipCodeField" onChange={handleChange}></ input>
                {/* <input onClick={searchZip} type ="submit" value ="get weather" id="searchButton"></ input> */}
                <input type ="submit" value ="get weather" id="searchButton"></ input>
            </form>

            {/* \this might end up moved into a 2nd useEffect hook... */}
            {/* <InfoDisplay apiResponse={apiResponse}/> */}
        </>
    )
}

export default InputForm;
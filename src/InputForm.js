import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';

function InputForm(){
    let [zipCode, setZipCode] = useState("");
    let [apiResponse, setResponse] = useState("");

    const handleChange = (event) =>{
        event.preventDefault();
        setZipCode(event.target.value)
        // console.log(zipCode);
    }
  
    const handleSubmit = (event) =>{
        event.preventDefault();
        setZipCode(event.target.value)
        console.log(zipCode)
        getWeatherInfo(zipCode)
    }

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
        )
                
            // console.log(apiResponse)
            // let current_conditions_response = await fetch(current_codntions_url)
    
            // let zip_code_data = zip_code_response.json()
            // let current_conditions_data = await current_conditions_response.json()
    
            // console.log(zip_code_data)
            // console.log(current_conditions_data)

            // Definitely must return data from this function!
            // return zip_code_data
        }
        
        catch (error){
            // weather.innerHTML = error;
            console.log(error)
        } 
    
    }
    

    // // useEffect
    // useEffect(() =>{
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=8fcd14240be7520f5b8428765ed5943b&units=imperial`)
    //     .then(response => response.json())
    //     .then(data => setResponse(data))
    //     console.log(apiResponse)
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
        </>
    )
}

export default InputForm
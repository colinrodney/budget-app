import React from 'react';
import {useState, useEffect, useMemo, useRef} from 'react';
import InfoDisplay from './InfoDisplay';
import './App.css';

function InputForm(){
    // let [zipCode, setZipCode] = useState(``);
    // let [apiResponse, setResponse] = useState({});
    const isMounted = useRef(false)

    const handleChange = (event) =>{
        event.preventDefault();
        console.log(event.target.value);
        setZipCode(event.target.value)
    }
  
    const handleSubmit = (event) =>{
        event.preventDefault();
        // setZipCode(event.target.value)
        // console.log(zipCode)
        // getWeatherInfo(zipCode)

        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=8fcd14240be7520f5b8428765ed5943b&units=imperial`)
        .then(response => response.json())
        .then(data => setResponse(data))
    }

    // async function getWeatherInfo(zipCode){
    //     console.log(`ZIP CAPTURED IN GET WEATHER INFO FUNCTION ${zipCode}`) // logs user entered ZIP code
    
    //     // let zip_code_url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=8fcd14240be7520f5b8428765ed5943b`
    //     let zip_code_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=8fcd14240be7520f5b8428765ed5943b&units=imperial`
    
    //     try
    //     {
    //         // let zip_code_response =
    //          await fetch(zip_code_url)
    //         .then(response => response.json())
    //         .then(data => {
    //             setResponse(data)
    //             console.log(data)
    //         }
    //     )
                
    //         // console.log(apiResponse)
    //         // let current_conditions_response = await fetch(current_codntions_url)
    
    //         // let zip_code_data = zip_code_response.json()
    //         // let current_conditions_data = await current_conditions_response.json()
    
    //         // console.log(zip_code_data)
    //         // console.log(current_conditions_data)

    //         // Definitely must return data from this function!
    //         // return zip_code_data
    //     }
        
    //     catch (error){
    //         // weather.innerHTML = error;
    //         console.log(error)
    //     } 
    
    // }
    
    //  useMemo 
    const responseCached = useMemo (() =>{
        return {apiResponse}
    },[apiResponse])


    // useEffect - fetch data from API
    // useEffect(() =>{
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=8fcd14240be7520f5b8428765ed5943b&units=imperial`)
    //     // let [apiResponse, setResponse] = useState("");
    //     // fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    //     .then(response => response.json())
    //     .then(data => setResponse(data))
    // },[])
    
    // useEffect - render IndoDisplay component based on useRef/ isMounted.current
    // useEffect(() =>{
    //     if (isMounted.current){
    //         console.log(apiResponse)
    //         // InfoDisplay(apiResponse)
    //     } else {
    //         console.log(isMounted.current)
    //         isMounted.current = true;
    //         console.log(isMounted.current)
    //     }
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
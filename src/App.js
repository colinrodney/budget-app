import React, {useState} from 'react';
// import useState from "react";
// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

// DOM ELEMENTS
let cityName = document.getElementById(`cityName`)
let temp = document.getElementById(`temp`)


// ZIP CODE FORM COMPONENT
function App(){
  let [zipCode, setZipCode, apiResponse] = useState("");

  
  const handleChange = (event) =>{
    event.preventDefault();
    setZipCode(event.target.value)
    console.log(zipCode);
  }
  
  const handleSubmit = (event) =>{
      event.preventDefault();
      // setZipCode(event.target.value)
      console.log(zipCode)
      apiResponse = getWeatherInfo(zipCode)
      console.log(apiResponse);
    }

  // Get Weather Info
  async function getWeatherInfo(zipCode){
    console.log(`ZIP CAPTURED IN GET WEATHER INFO FUNCTION ${zipCode}`) // logs user entered ZIP code

    // let zip_code_url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=8fcd14240be7520f5b8428765ed5943b`
    let zip_code_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=8fcd14240be7520f5b8428765ed5943b&units=imperial`

    try
    {
        let zip_code_response = await fetch(zip_code_url)
        // let current_conditions_response = await fetch(current_codntions_url)

        let zip_code_data = zip_code_response.json()
        // let current_conditions_data = await current_conditions_response.json()

        // console.log(zip_code_data)
        // console.log(current_conditions_data)
        return zip_code_data // Definitely must return data from this function!
    }
    
    catch (error){
        // weather.innerHTML = error;
    } 

}


    // RETURN INFO
    return (
      <div>
        <form action="" id="searchForm" onSubmit={handleSubmit}>
            <label htmlFor="zipCode">Zip Code:</label>
            {/* user input field */}
            <input type="text" name="zip" id="zipCodeField" onChange={handleChange}></ input>
            {/* <input onClick={searchZip} type ="submit" value ="get weather" id="searchButton"></ input> */}
            <input type ="submit" value ="get weather" id="searchButton"></ input>
        </form>

        {/* infoDisplay Section */}
        <div>
          <section>
            <div>City</div>
            <div id="cityName">{zipCode}</div>
          </section>
          <section>
              <div>Temp</div>
              <div id="temp"></div>
          </section>
        </div>
      </div>
    )
  }

  // function InfoDisplay([zipCode]){
  //   // const [zipCode, setZipCode] = useState("");
  //     return(
  //       <div>
  //         <section>
  //           <div>City</div>
  //           <div id="cityName"></div>
  //         </section>
  //         <section>
  //             <div>Temp</div>
  //             <div id="temp"></div>
  //         </section>
  //       </div>
  //     )
  //   }



export { App };




































/* // function App() {
//     return (
//       <div className="App">
//         <header className="App-headernpm">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
   */

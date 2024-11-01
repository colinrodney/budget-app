import React from 'react';
// import logo from './logo.svg';
// import InputForm from "./InputForm"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


function InfoDisplay(props){
  // destructure props NOTE props is coming in as props.apiResponse!
  let {main, name, weather, wind } = props.apiResponse
  // console.log({main, name, weather, wind})
  console.log(props.apiResponse)
  // for (const [key, value] of Object.entries(props.apiResponse)){
  //   console.log(`${key} ${value}`)
  // }

  return(
    <>
      {Object.entries({main, name, weather, wind}).map(([key, value]) =>
        // NOTE each child element rendered MUST have a unique key prop assigned!
        <>
          {/* <p key={key}>{JSON.stringify(key)}: {JSON.stringify(value)}</p> */}

          {/* CITY NAME/ Location */}
            {(key === `name`) ? (
              <div key={key}>
                <p>City {JSON.stringify(value)}</p>
              </div>
            ):(null)}

            {/* MAIN (temp/ high/lo temp/ humidity etc) */}
            {(key === "main" || !key === `undefined` ) ? (
              <div key={key}>
                <p>Current Temp: {JSON.stringify(main.temp)}</p>
                <p>High Temp: {JSON.stringify(main.temp_max)}</p>
                <p>Low Temp: {JSON.stringify(main.temp_min)}</p>
              </div>
            ):(null)}

            {/* WEATHER DESCRIPTION */}
            {(key === "weather" || !key === `undefined`) ? (
              <div key={key}>
                <p>
                  Current Condition:{JSON.stringify(weather[0].main)}
                  <p>{JSON.stringify(weather[0].description)}</p>
                  <p>
                    <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={JSON.stringify(weather[0].icon)}></img>
                    </p>
                </p>
                
              </div>
            ):(null)}
            
            {/* WIND INFO */}
            {(key === "wind" || !key === `undefined`) ? (
              <div key={key}>
                <p>Wind Speed: {JSON.stringify(wind.speed)}</p>
              </div>
            ):(null)}


          <div>
            {/* WEATHER 
            {(key === "weather") ? (
              <p>{JSON.stringify(value[0].main)}</p>
              // <p>{JSON.stringify(value[0].description)}</p>
              )
              :(null)
              }
            */}
          </div>
        </>
      )}
    </>
  //   <div>
  //     <p>City:{JSON.stringify(props.apiResponse.name)}</p>
  //     <p>Temp:{JSON.stringify(props.apiResponse.main)}</p>
  // </div>
  )
}

// // function InfoDisplay(){
// //   const [zipCode, setZipCode] = useState("");
// //     return(
// //       <div>
// //         <section>
// //           <div>City</div>
// //           <div id="cityName"></div>
// //         </section>
// //         <section>
// //             <div>Temp</div>
// //             <div id="temp"></div>
// //         </section>
// //       </div>
// //     )
// //   }
  
export default InfoDisplay;
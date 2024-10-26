import React from 'react';
// import logo from './logo.svg';
// import InputForm from "./InputForm"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


function InfoDisplay(props){
  // destructure props NOTE props is coming in as props.apiResponse!
  let {main, name, weather} = props.apiResponse
  console.log((weather))
  // for (const [key, value] of Object.entries(props.apiResponse)){
  //   console.log(`${key} ${value}`)
  // }

  return(
    <>
      {Object.entries(props.apiResponse).map(([key, value]) =>
        // NOTE each child element rendered MUST have a unique key prop assigned!
        <>
          {/* <p key={key}>{JSON.stringify(key)}: {JSON.stringify(value)}</p> */}
            {(key === "main" || key === "weather" || key ==="name" ) ? (
              // current temp
              <>{JSON.stringify(key)},{JSON.stringify(value)}</>
             // high temp
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
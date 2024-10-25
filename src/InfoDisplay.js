import React from 'react';
// import logo from './logo.svg';
// import InputForm from "./InputForm"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


function InfoDisplay(props){
  console.log((Object.entries(props)))
  // for (const [key, value] of Object.entries(props.apiResponse)){
  //   console.log(`${key} ${value}`)
  // }

  return(
    <>
      {Object.entries(props.apiResponse).map(([key, value]) =>
        // NOTE each child element rendered MUST have a unique key prop assigned!
        <div>
          {/* <p key={key}>{JSON.stringify(key)}: {JSON.stringify(value)}</p> */}
          <p>
            {(key === "name") ? (
              <p>{JSON.stringify(key)}, {JSON.stringify(value)}`</p>):(null)}
              {(key === "weather") ? ( 
              <p>{JSON.stringify(key)}, {JSON.stringify(value)}`</p>):(null)}
              {(key === "main") ? ( 
              <p>{JSON.stringify(key)}, {JSON.stringify(value)}`</p>):(null)}
          </p>
        </div>
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
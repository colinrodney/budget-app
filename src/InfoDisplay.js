import React, {useState} from 'react';
// import logo from './logo.svg';
import InputForm from "./InputForm"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


function InfoDisplay(props){
  for (const [key, value] of Object.entries(props.apiResponse)){
    console.log(`${key} ${value}`)
  }

  return(
    <ul>
      {/* {Object.entries((props.apiResponse) => (
        <li>key={props.apiResponse}</li>
      ))} */}
    </ul>
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
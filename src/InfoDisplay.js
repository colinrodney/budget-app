import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


function InfoDisplay(){

  return(
    <div>
      <p>City:{JSON.stringify(apiResponse.name)}</p>
      <p>Temp:{JSON.stringify(x)}</p>
  </div>
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
  
  // export {InfoDisplay};
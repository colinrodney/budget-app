import React, {useState} from 'react';
// import useState from "react";
// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


// ZIP CODE FORM COMPONENT
function App(){
  const [zipCode, setZipCode] = useState("");
  
  const handleChange = (event) =>{
    event.preventDefault();
    setZipCode(event.target.value)
    console.log(zipCode);
  }
  
  const handleSubmit = (event) =>{
      event.preventDefault();
      // setZipCode(event.target.value)
      console.log(zipCode)
    }

    return (
      <div>
        <form action="" id="searchForm" onSubmit={handleSubmit}>
            <label htmlFor="zipCode">Zip Code:</label>
            {/* user input field */}
            <input type="text" name="zip" id="zipCodeField" onChange={handleChange}></ input>
            {/* <input onClick={searchZip} type ="submit" value ="get weather" id="searchButton"></ input> */}
            <input type ="submit" value ="get weather" id="searchButton"></ input>
        </form>

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

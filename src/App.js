import React from 'react';
// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


// ZIP CODE FORM COMPONENT
function App(){
  return (
      <form action="" id="searchForm">
          <label for="zipCode">Zip Code:</label>
          <input type="text" name="zip" id="zipCodeField"></ input>
          <input type ="submit" value ="get weather" id="searchButton"></ input>
      </form>
  );
}

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

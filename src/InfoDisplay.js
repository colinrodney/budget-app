import React from 'react';
// import logo from './logo.svg';
import LoadingComponent from "./LoadingComponent"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


function InfoDisplay(props){
  const {apiResponse = {}} = props
  // destructure props - NOTE props is coming in as props.apiResponse!

  
  // let {main, name, weather, wind } = props
  // console.log({main, name, weather, wind})
  // if (apiResponse === ``){
  //   console.log(`No apiResponse`)
  
  //   // return(
  //   //   <LoadingComponent />
  //   // )
  //   // console.log(`awaiting info...`)
  // }  else{
  //   // console.log(<LoadingComponent />)
  //   console.log(`apiResponse present`)
  // }

  if (apiResponse.main){
  
    return(
      <div>
          {JSON.stringify(apiResponse.main)}
        </div>
    )
  }  else{
    return(
      <LoadingComponent />
    )
  }

  // return(
  //   <>

  //     {/* {Object.entries({apiResponse}).map(([key, value]) =>(
  //       <div key={key}>
  //         {JSON.stringify(value)}
  //       </div>
  //     ))} */}

  //     {/* {JSON.stringify(apiResponse.main)} */}
  //   </>
  // )
}
export default InfoDisplay;
import React from 'react';
// import logo from './logo.svg';
import LoadingComponent from "./LoadingComponent"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


function InfoDisplay(props){
  const { apiResponse = {} } = props
  // destructure props - NOTE props is coming in as props.apiResponse!

  
  // let {main, name, weather, wind } = props
  // console.log({main, name, weather, wind})
  if (apiResponse.main){
    console.log(apiResponse.main)
  
    // return(
    //   <LoadingComponent />
    // )
    // console.log(`awaiting info...`)
  }
  else{
    console.log(<LoadingComponent />)
  }

  return(
    <>
      {/* {Object.entries({ apiResponse }).map(([key, value]) =>{
        <p key={key}>{JSON.stringify(value)}</p>
      })} */}

      {JSON.stringify(apiResponse.main)}
    </>
  )
}

export default InfoDisplay;
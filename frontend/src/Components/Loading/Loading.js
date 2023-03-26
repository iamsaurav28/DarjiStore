import React from 'react'
import {BounceLoader} from "react-spinners";

const Loading = () => {
  return (
    <div 
      style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          width:"100%",
          height:"100%"
      }}
    >
     
     <BounceLoader 
     animation="border"
     
     />

    </div>
  )
}

export default Loading;
import React from 'react'
import {Alert} from"react-bootstrap";



const Error = ({variant="info", children}) => {
  return (
    <div>
     <Alert variant={variant} style={{ fontSize:20}}>
          <strong>{children}</strong>
     </Alert>
    </div>
  )
}

export default Error;
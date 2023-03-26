import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import "./LandingPage.css"

const LandingPage = ({history}) => {

     
//   useEffect (() => {
//      const userInfo = localStorage.getItem("userInfo");

// if (userInfo){
// history.push("/mynotes")
// }

// }, [history])



  return (
    <div className='main'>
     <Container>
          <Row>
               <div className='intro-text'>
                    <div>
                         <h1 className='title'>Welcome to Daily Dairy</h1>
                         <p className='subtitle'>one safe place for all urs notes</p>
                    </div>
                    <div className='buttonContainer'>
                         <a href="/login">
                              <Button size="lg" className='landingbutton'>Login</Button>
                         </a>
                         <a href="/signup">
                              <Button  size="lg" className='landingbutton' variant='outline-primary'>Sign Up</Button>
                         </a>
                    </div>
               </div>
               
          </Row>
     </Container>
    </div>
  )
}

export default LandingPage;
import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import axios from "axios";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  

  useEffect(() => {

    const userInfo = localStorage.getItem("userInfo");


    if(userInfo){
      navigate("/home")
    }

  });


  const submitHandler = async (e) => {
   e.preventDefault();


   try{

    const config = {
    headers:{
      "Content-type" : "application/json"
    }
    }


    const { data } = await axios.post(
      '/api/users/login', 
      {
      email,
      password,
    },
     config
    );
    console.log(data)
    localStorage.setItem('userInfo', JSON.stringify(data))      
    setLoading(false)
  } catch (error){
         setError(error.reponse.data.message)
  }
  }


 return (

   <div className='top'>
    { loading && <Loading /> } 

   <Form  onSubmit={submitHandler}>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
       <Form.Text className="text-muted">
         We'll never share your email with anyone else.
       </Form.Text>
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicCheckbox">
       <Form.Check type="checkbox" label="Check me out" />
     </Form.Group>
     <Button variant="primary" type="submit">
       Submit
     </Button>
   </Form>
       <Row className="py-3">
         <Col>
           New Customer ? <Link to="/signup">Sign up</Link>
         </Col>
       </Row>

   
   </div>

 
 )
}

export default Login;



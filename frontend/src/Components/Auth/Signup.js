import React, {useState}from 'react'
import "./Auth.css"
import axios from 'axios';
import {Form }from"react-bootstrap";
import Error from '../Error/Error';
import Loading from '../Loading/Loading';

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [pic , setPic] = useState("");
  const [message, setMessage] = useState(null);
  const [picmessage, setpicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const submitHandler = async(e) => {
    e.preventDefault();

    if(password !== confirmpassword){
      setMessage("passwords do not match");
    }else{
      setMessage(null)
    }



        try{
          const config = {
          headers:{
            "Content-type" : "application/json"
          }
          }
     
          setLoading(true);
     
          const { data } = await axios.post(
            '/api/users', 
            {name,email,password},
           config
          );
     
          
          setLoading(false)
          localStorage.setItem('userInfo', JSON.stringify(data))      
        } catch (error){
            setError(error.response.data.message);
        }  
  };
  


  return (
    <div className='top'>
{error && <Error variant='danger'>{error}</Error> } 
    { loading && <Loading /> }
     <Form className='signpform'  onSubmit={submitHandler} >
     <input className='signupName' type="name" placeholder="Username" value={name}  onChange={(e) => setName(e.target.value)}  />
     <input className='signupName' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
     <input className='signupName' type="password" placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)} />
     <input className='signupName' type="password" placeholder=" confirm Password" value={confirmpassword}  onChange={(e) => setConfirmPassword(e.target.value)}/>
     {/* <Form.Control id="custom-file" type='file' label="upload photo" accept='image/*' onChange={(e) => (e.target.files[0])} /> */}
     <button type="submit" className="signupbtn" >Sign up</button>
     </Form>
    </div>
  )
}

export default Signup;
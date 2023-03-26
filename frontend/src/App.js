import './App.css';
import {useEffect} from "react";
import { Routes, Route } from 'react-router-dom';
import {useNavigate } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import SingleProducts from './Components/Products/SingleProducts';
import Cart from './Components/Cart/Cart';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Auth/Login';
import Signup from "./Components/Auth/Signup";
import PrivateRoute from './Components/Auth/PrivateRoute';
import Profile from './Components/Auth/Profile';

function App() {

  const navigate = useNavigate();
  

  useEffect(() => {

    const userInfo = localStorage.getItem("userInfo");


    if(userInfo){
      navigate("/home")
    }

  },[navigate]);




  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='singleproducts' element={<PrivateRoute Component={SingleProducts} />} />
        <Route path="cart" element={<Cart />}  />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={ <Login />} />
     <Route path="signup" element={ <Signup />} />
      </Routes>
      </header>
      <Footer/>
    </div>
  );
}

export default App;

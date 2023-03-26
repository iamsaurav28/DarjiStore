 import  React from "react";
 import {Link, useNavigate} from "react-router-dom";
 import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
 import Navbar from 'react-bootstrap/Navbar';
 import { Cartstate } from "../../Context/Context";
 import "./Navbar.css";


const Header=()=> {


  const navigate = useNavigate()

  const { state :{cart},
   productDispatch
} = Cartstate();


return(
     <div  >
          <Navbar className="navbar navbar-expand-lg bg-body-tertiary " fixed="top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" >Darji Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/singleproducts" >Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart" >Cart
          <sup>{cart.length}</sup>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile" >Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" 
           onClick={() => {
             localStorage.removeItem("userInfo");
             navigate("/")    
          }}>Logout</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) =>
          productDispatch({
               type:"FILTER_BY_SEARCH",
               payload:e.target.value
          })
          }   
          />
        <button className="btn btn-outline-success" type="submit"  >Search</button>
      </form>
    </div>
  </div>
</Navbar>


     </div>
)
}


export default Header;



// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// const NavbarEcom=() => {


//   const { state :{cart},
//     productDispatch
//  } = Cartstate();
//   return (
//     <>
//       {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
//         <Navbar key={expand} bg="light" expand={expand} className="mb-3">
//           <Container fluid>
//             <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                   Offcanvas
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <Nav.Link href="#action1">Home</Nav.Link>
//                   <Nav.Link href="#action2" to="/singleproducts">Products</Nav.Link>
//                   <NavDropdown
//                     title="Dropdown"
//                     id={`offcanvasNavbarDropdown-expand-${expand}`}
//                   >
//                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action4">
//                       Another action
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action5">
//                       Something else here
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </Nav>
//                 <Form className="d-flex">
//                   <Form.Control
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

//export default NavbarEcom;
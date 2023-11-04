import React from "react";
import { Navbar, Nav,Container,Button  } from "react-bootstrap";
const CommonHeader = () => {
  const logoutHandler=()=>{
    window.location.href="http://localhost:3000/login";
    localStorage.clear();
  }
return (    
<Navbar bg="dark" variant="dark" style={{ fontSize: 25, height: 80 }}>
<Container>   
    <Navbar.Brand
          style={{
            fontStyle: "italic",
            fontSize: 65,
            color: "#4C9900",
            fontFamily: "Brush Script MT",
          }}
        >
          Ecommerce Web
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="home" style={{ color: "#00CC00" }}>
            Home
          </Nav.Link>
          <Nav.Link href="store" style={{ color: "#00CC00" }}>
            Store
          </Nav.Link>
          <Nav.Link href="about" style={{ color: "#00CC00" }}>
            About
          </Nav.Link>
          <Nav.Link href="contactUS" style={{ color: "#00CC00" }}>
            ContactUs
          </Nav.Link>
          <Button style={{width:100,fontSize:20,textAlign:"center"}} onClick={logoutHandler}>Logout</Button>
        </Nav>
      
        </Container>
    </Navbar>
  );
  
};

export default CommonHeader;

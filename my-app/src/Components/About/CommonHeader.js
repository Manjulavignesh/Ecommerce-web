import React from "react";
import { Navbar, Nav,Container  } from "react-bootstrap";
const CommonHeader = () => {
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
        </Nav>
      
        </Container>
    </Navbar>
  );
  
};

export default CommonHeader;

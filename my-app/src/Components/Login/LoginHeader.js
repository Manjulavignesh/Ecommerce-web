import React from "react";
import { Navbar, Nav,Container  } from "react-bootstrap";
const LoginHeader = () => {
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
        <Nav>
          <Nav.Link href="login" style={{ color: "#00CC00" }}>
            LogIn
          </Nav.Link>
        </Nav>
      
        </Container>
    </Navbar>
  );
  
};

export default LoginHeader;

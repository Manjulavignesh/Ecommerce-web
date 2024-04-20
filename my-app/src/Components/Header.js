import React from "react";
import { Container, Navbar, Nav, Dropdown, Badge, DropdownItem } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../Context/Context";
import Cart from "./Cart";
import {Button} from "react-bootstrap";
const Header = () => {
  const logoutHandler=()=>{
    window.location.href="http://localhost:3000/login";
    /*localStorage.clear();*/
  }
  const {
    state: { cart },
  } = CartState();
  return (
    <Navbar bg="dark" variant="dark" style={{ fontSize: 25, height: 80 }}>
      <Container>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 500 }}>
              <Dropdown.Item style={{ backgroundColor: 'white'}}><Button type="button" style={{ marginLeft: 475, fontSize: 15 }} >
        X
      </Button></Dropdown.Item>
              <Cart></Cart>
            </Dropdown.Menu>
          </Dropdown>
          
        </Nav>
        
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

export default Header;

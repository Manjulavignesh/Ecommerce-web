import React from "react";
import { Container, Navbar, Nav, Dropdown, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../Context/Context";
import Cart from "./Cart";
const Header = () => {
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
          <Nav.Link href="#home" style={{ color: "#00CC00" }}>
            Home
          </Nav.Link>
          <Nav.Link href="#store" style={{ color: "#00CC00" }}>
            Store
          </Nav.Link>
          <Nav.Link href="#about" style={{ color: "#00CC00" }}>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

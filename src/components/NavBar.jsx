import React from "react";
import CartWidget from "./CartWidget";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const NavBar = (props) => {
  const { count } = props;
  const { iconCart } = useCartContext();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Tecno-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/categoria/audio">
                  Audio
                </NavDropdown.Item>
                <NavDropdown.Item href="/categoria/camara">
                  Camara
                </NavDropdown.Item>
                <NavDropdown.Item href="/categoria/monitor">
                  Monitor
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Link to="/cart">
            {iconCart}
            <CartWidget count={count} />
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import MainTitle from '../../molecules/MainTitle/MainTitle';


//scss
import './navbar.scss';

const NavbarContainer = () => {
    return (
        <Navbar className="navbar-color"sticky="top"  expand="lg">
  <Navbar.Brand href="#home"><MainTitle type="small"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavbarContainer;
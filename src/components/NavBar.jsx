import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-navbar">
      <button className="navbar-main" onClick={() => setOpen(!open)}></button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Navbar className="collapsedNavbar">
            <Navbar.Brand href="#home">
              <a href="#home">
                  <button className="navbar-logo"></button>
              </a>
            </Navbar.Brand>
            <Nav.Link className="my-navText" href="/Work">Work</Nav.Link>
            <Nav.Link className="my-navText" href="/About">About</Nav.Link>
            <Nav.Link className="my-navText" href="/contact">Contact</Nav.Link>
          </Navbar>
        </div>
      </Collapse>
    </div>
  );
}

export default NavBar;

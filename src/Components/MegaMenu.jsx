import React from 'react';
import '../styles/megaMenu.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function MegaMenu() {
  return (
    <>
      <Navbar bg="mega-menu" expand="lg">
        <Container className="justify-content-end justify-content-lg-between">
          <Navbar.Toggle className="justify-self-end" />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="home.html" className="text-white pr-5">
                Home
              </Nav.Link>
              <NavDropdown title="Groceries" className="text-white">
                <NavDropdown.Item>All Groceries</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="Groceries.html">Dals and Pulses</NavDropdown.Item>
                <NavDropdown.Item href="Groceries.html">Almonds</NavDropdown.Item>
                <NavDropdown.Item href="Groceries.html">Cashew</NavDropdown.Item>
                <NavDropdown.Item href="Groceries.html">Rice and Rice products</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Household">
                <NavDropdown.Item>All Groceries</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="Groceries.html">Dals and Pulses</NavDropdown.Item>
                <NavDropdown.Item href="Groceries.html">Almonds</NavDropdown.Item>
                <NavDropdown.Item href="Groceries.html">Cashew</NavDropdown.Item>
                <NavDropdown.Item href="Groceries.html">Rice and Rice products</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Personal Care">
                <NavDropdown.Item>All Groceries</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="Groceries.html">Dals and Pulses</NavDropdown.Item>
                <NavDropdown.Item href="Groceries.html">Almonds</NavDropdown.Item>
                <NavDropdown.Item href="Groceries.html">Cashew</NavDropdown.Item>
                <NavDropdown.Item href="Groceries.html">Rice and Rice products</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Packaged Foods">
                <NavDropdown.Item>All Groceries</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="Groceries.html">Dals and Pulses</NavDropdown.Item>
                <NavDropdown.Item href="Groceries.html">Almonds</NavDropdown.Item>
                <NavDropdown.Item href="Groceries.html">Cashew</NavDropdown.Item>
                <NavDropdown.Item href="Groceries.html">Rice and Rice products</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Beverage">
                <NavDropdown.Item>All Groceries</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="Groceries.html">Dals and Pulses</NavDropdown.Item>
                <NavDropdown.Item href="Groceries.html">Almonds</NavDropdown.Item>
                <NavDropdown.Item href="Groceries.html">Cashew</NavDropdown.Item>
                <NavDropdown.Item href="Groceries.html">Rice and Rice products</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="home.html" className="text-white">
                Gourment
              </Nav.Link>
              <Nav.Link href="home.html" className="text-white">
                Offer
              </Nav.Link>
              <Nav.Link href="home.html" className="text-white ">
                Contacts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MegaMenu;

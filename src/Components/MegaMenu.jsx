import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/megaMenu.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function MegaMenu() {
  //   const dropDownStyle = { fontWeight: '500 !important', color: '#999 !important', fontSize: '14px' };
  // const dropTitle = { color: '#fe9126', paddingBottom: '1rem', fontSize: '20px' };
  return (
    <>
      <Navbar bg="mega-menu" expand="lg">
        <Container className="justify-content-end justify-content-md-between">
          <Navbar.Toggle className="justify-self-end" />
          <Navbar.Collapse>
            <Nav>
              <Link to="/" className=" text-white text-decoration-none px-3 nav-link">
                Home
              </Link>
              <Link to="/pizza" className=" text-white text-decoration-none px-3 nav-link">
                PIZZA
              </Link>
              <Link to="/momo" className=" text-white text-decoration-none px-3 nav-link">
                MOMO
              </Link>
              <Link to="/noodles" className=" text-white text-decoration-none px-3 nav-link">
                NOODLES
              </Link>
              <Link to="/chilli" className=" text-white text-decoration-none px-3 nav-link">
                CHILLI
              </Link>
              <Link to="/rice" className=" text-white text-decoration-none px-3 nav-link">
                RICE
              </Link>
              <Link to="/sandwich" className="text-white text-decoration-none px-3 nav-link">
                SANDWICH
              </Link>
              <Link to="/healthychoice" className="text-white text-decoration-none px-3 nav-link">
                HEALTHY CHOICE
              </Link>

              <Link to="/offer" className="text-white text-decoration-none px-3 nav-link">
                Offer
              </Link>
              <Link to="/contact" className="text-white text-decoration-none nav-link">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MegaMenu;

/* <NavDropdown title="Groceries" className="text-white px-2">
                <NavDropdown.Item style={dropTitle}>All Groceries</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/groceries" className="text-decoration-none text-secondary">
                    Dals and Pulses
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/groceries" className="text-decoration-none text-secondary">
                    Almonds
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/groceries" className="text-decoration-none text-secondary">
                    Cashew
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/groceries" className="text-decoration-none text-secondary">
                    Rice and Rice products
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Household" className="px-2">
                <NavDropdown.Item style={dropTitle}>All HouseHold</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/household" className="text-decoration-none text-secondary">
                    Cookware
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/household" className="text-decoration-none text-secondary">
                    Dust pan
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/household" className="text-decoration-none text-secondary">
                    Scrubbers
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/household" className="text-decoration-none text-secondary">
                    Dust Cloth
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Personal Care" className="px-2">
                <NavDropdown.Item style={dropTitle}>All Groceries</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/personalcare" className="text-decoration-none text-secondary">
                    Baby care
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/personalcare" className="text-decoration-none text-secondary">
                    Baby Care Accessories
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/personalcare" className="text-decoration-none text-secondary">
                    Baby Oil and Shampoo
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/personalcare" className="text-decoration-none text-secondary">
                    Baby Powder
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Packaged Foods" className="px-2">
                <NavDropdown.Item style={dropTitle}>All Groceries</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/packagedfood" className="text-decoration-none text-secondary">
                    Chips
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/packagedfood" className="text-decoration-none text-secondary">
                    Biscuit
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/packagedfood" className="text-decoration-none text-secondary">
                    Baby foods
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/packagedfood" className="text-decoration-none text-secondary">
                    Canned foods
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/packagedfood" className="text-decoration-none text-secondary">
                    Chocolate ans Sweets
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Beverage" className="px-3">
                <NavDropdown.Item style={dropTitle}>All Groceries</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/beverage" className="text-decoration-none text-secondary">
                    Coca cola
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/beverage" className="text-decoration-none text-secondary">
                    Juices
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/beverage" className="text-decoration-none text-secondary">
                    Coca cola
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/beverage" className="text-decoration-none text-secondary">
                    Instant Coffee
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={dropDownStyle}>
                  <Link to="/beverage" className="text-decoration-none text-secondary">
                    Tea
                  </Link>
                </NavDropdown.Item>
              </NavDropdown> */

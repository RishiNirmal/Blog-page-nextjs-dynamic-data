import React from 'react'
import { Nav, Navbar, Button, Container, Offcanvas, NavDropdown, Form, FormControl } from 'react-bootstrap';
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function NavItem() {
    return (
       
        <Navbar bg="light" expand={false} sticky="top">
        <Container fluid>
          <Navbar.Brand href="/"><Image src="/vercel.svg" alt="Vercel Logo" width={150} height={50} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"><Image src="/vercel.svg" alt="Vercel Logo" width={150} height={50} /></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/" className={styles.navmenu}>Home</Nav.Link>
                <Nav.Link href="/about" className={styles.navmenu}>About Us</Nav.Link>
                <Nav.Link href="/blogs" className={styles.navmenu}>Blog</Nav.Link>
                <Nav.Link href="/contact" className={styles.navmenu}>Contact</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              {/* <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )
}


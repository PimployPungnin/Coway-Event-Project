import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { FiMenu, FiX } from "react-icons/fi"
import './Navbar.css'


function NavigationBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <Navbar sticky='top' bg="white" expand="lg">
            <Link to="/about" className='navbar-brand ml-3'>
                <img src="/logo.jpg" alt="Logo" height="23" />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleClick}>
                {click ? (<FiX />) : (<FiMenu />)}
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className={click ? 'show' : ''}>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/about" className="nav-link" onClick={closeMobileMenu}>Home</Nav.Link>
                    <Nav.Link as={Link} to="/event" className="nav-link" onClick={closeMobileMenu}>Event</Nav.Link>
                </Nav>
                <Nav className='ml-auto mr-3'>
                    <Nav.Link as={Link} to="/register" className="nav-link ml-auto" onClick={closeMobileMenu}>ลงทะเบียน</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;

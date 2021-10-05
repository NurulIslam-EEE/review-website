import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../img/ancile-logo-175x44.png'

const Header = () => {

    return (
        <div>
            <Container fluid className='pt-3 d-md-flex justify-content-between header'>
                <div >
                    <FontAwesomeIcon className='ms-3 text-warning' icon={faTwitter} />
                    <FontAwesomeIcon className='ms-3 text-warning' icon={faFacebook} />
                    <FontAwesomeIcon className='ms-3 text-warning' icon={faLinkedin} />
                </div>

                <div className='d-flex '>
                    <p className='text-white me-5'><FontAwesomeIcon className='text-warning' icon={faPhone} />  212-564-2351</p>
                    <p className='text-white me-5'><FontAwesomeIcon className='text-warning' icon={faEnvelope} />  info@tiaedu.com</p>
                </div>
            </Container>

            <Navbar expand="md" className='bg-opacity-2'>
                <Container fluid >
                    <Navbar.Brand href="#"> <img src={logo} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="my-2 -5 ms-auto my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to="/home" className='me-5 text-decoration-none fs-5 text text-dark nav'>Home</NavLink>
                            <NavLink to="/about" className='me-5 text-decoration-none fs-5 text text-dark nav '>About</NavLink>
                            <NavLink to="/courses" className='me-5 text-decoration-none fs-5 text text-dark nav'>Courses</NavLink>
                            <NavLink to="/testimonials" className='me-5 text-decoration-none fs-5 text text-dark nav'>Testimonials</NavLink>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
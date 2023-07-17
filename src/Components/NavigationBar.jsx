import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup'
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cart from '../pages/Cart';

library.add(faShoppingCart);

const userLogin = localStorage.getItem('userLogin');

const userLogout = () => {
    localStorage.setItem('userLogin', 'false');
    window.location.reload();
}

const userName = localStorage.getItem('UserName');

function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg" className='nav-bar'>
            <Container>
                <Navbar.Brand href="#home">
                    <span className='nav-brand'>
                        <span className='nav-brand-name'>
                        <FontAwesomeIcon icon="shopping-cart" className='main-icon'/>
                            <p>Raza Store</p>
                            </span>
                    {userLogin == 'true' 
                        ?
                    <div className='nav-link user-name'>{userName}</div>
                        :
                        null   
                    }
                    </span>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav">
                    {
                        userLogin == 'true' ? 
                        <>
                            <Link  className="mx-2 text-decoration-none text-dark nav-link" to="/">Home</Link>
                            <Link  className="mx-2 text-decoration-none text-dark nav-link" to="/products">Products</Link>
                            <Link  className="mx-2 text-decoration-none text-dark nav-link" to="/products/categories">Categories</Link>
                            <Link  className="btn buttons cart-btn text-decoration-none nav-link" to="/cart">Cart</Link>
                            <Link  className="btn buttons" onClick={userLogout}>Logout</Link>
                        </>
                        : 
                        <>
                            <Link  className="mx-2 text-decoration-none text-dark nav-link" to="/">Home</Link>
                            <Link  className="mx-2 text-decoration-none text-dark nav-link" to="/products">Products</Link>
                            <Link  className="mx-2 text-decoration-none text-dark nav-link" to="/products/categories">Categories</Link>
                            <Login />
                            <Signup />
                        </>
                    }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
// import React from 'react';
import {Logo} from './Logo'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// const logo = '../assets/images/IYV.png';

function TopBar(){
    return (
        <>
        
        <Navbar className='navBar'>
        <Container>
            <Navbar.Brand href="#home">
                <Logo />
            </Navbar.Brand>
        </Container>
            <ListGroup horizontal>
                <ListGroup.Item variant="info">Personas</ListGroup.Item>
                <ListGroup.Item variant="info">Paisajes</ListGroup.Item>
                <ListGroup.Item variant="info">Abstractos</ListGroup.Item>
                {/* <ListGroup.Item variant="info">horizontally!</ListGroup.Item> */}
            </ListGroup>
            <div>
            <Button variant="info">Contcato</Button>{' '}
            </div>
        </Navbar>
        </>
    )
    
};

export default TopBar;
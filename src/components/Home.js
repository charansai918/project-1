import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FiAlignJustify } from "react-icons/fi";
import { BsFillBellFill } from "react-icons/bs";



function Home() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  



  return (
    <div className='App'>

<Navbar className="bg-body-tertiary">
    
        <Container className='container' >
        <Button  variant="gray" onClick={handleShow}>
     <FiAlignJustify id="icon-logo"></FiAlignJustify>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
          <Navbar.Brand href="#home">
            <img
              src="/images/logo.png" 
              className="image-logo"
              alt="image"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home"  >LONG DRIVE CARS</Navbar.Brand>
          {/* <h1 className='head-title'>LONG DRIVE CARS</h1> */}
          <Navbar.Brand href="#home">
          <BsFillBellFill id="bell-icon" ></BsFillBellFill>
          </Navbar.Brand>
        </Container>
        </Navbar>
        <div>
            <h1 className='welcome'>Welcome</h1>
        </div>
        <div>
            <p>Rent Any Car Ennjoy Unlimited Kilometers with Zero deposit if You're Over 21 Age</p>
        </div>
        <div>
           
                <select name="cars" id="cars">
        <optgroup label="Swedish Cars">
        <option value="volvo">Hyderabad</option>
        <option value="saab">Saab</option>
        </optgroup>
        <optgroup label="German Cars">
         <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
        </optgroup>
             </select>
               
        </div>
    </div>
  )
}

export default Home
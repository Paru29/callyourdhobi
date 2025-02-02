import React from 'react'
import { Outlet } from "react-router";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css"
function Header() {
  return (
    <>
      <div style={{position: "absolute",zIndex: "9"}}  className='w-100'>
        <Navbar data-bs-theme="light" >
          <Container fluid className="navbar-container-padding">
            <Navbar.Brand href="/" className="menu-logo d-inline">
              <img src="https://cdn.prod.website-files.com/611d005f5ab332c43708bc80/611d005f5ab332896308bcb9_Hofft-logo-black.svg" alt="" />
            </Navbar.Brand>
            <Nav className="w-100 d-flex justify-content-between">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
      </div>

      <div className="scroll-nav" style={{willChange: "filter", filter: "invert(100%)"}}>
          <div className="scroll-nav-inner">
              <a href="#splash" className="scroll-nav-link-block w-inline-block w--current">
                <div className="scroll-nav-text"
                  style={{opacity: "0", filter: "blur(2px)", transform: "translate3d(5px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(20deg, 0deg)", transformStyle: "preserve-3d", display: "none"}}>
                  Home
                </div>
                <div className="scroll-nav-line"
                  style={{transform: "translate3d(5px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d",}}>
                </div>
              </a>
              <a href="#video" className="scroll-nav-link-block w-inline-block">
                <div className="scroll-nav-text"
                  style={{opacity: "0", filter: "blur(2px)", transform: "translate3d(5px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(20deg, 0deg)", transformStyle: "preserve-3d", display: "none"}}>
                  Philosophy</div>
                <div className="scroll-nav-line"
                  style={{transform: "translate3d(5px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d",}}>
                </div>
              </a>
              <a href="#ball" className="scroll-nav-link-block w-inline-block">
                <div className="scroll-nav-text"
                  style={{opacity: "0", filter: "blur(2px)", transform: "translate3d(5px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(20deg, 0deg)", transformStyle: "preserve-3d", display: "none"}}>
                  Experience</div>
                <div className="scroll-nav-line"
                  style={{transform: "translate3d(5px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d",}}>
                </div>
              </a>
              <a href="#technical" className="scroll-nav-link-block w-inline-block">
                <div className="scroll-nav-text"
                  style={{opacity: "0", filter: "blur(2px)", transform: "translate3d(5px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(20deg, 0deg)", transformStyle: "preserve-3d", display: "none"}}>
                  Technical expertise</div>
                <div className="scroll-nav-line"
                  style={{transform: "translate3d(5px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d",}}>
                </div>
              </a>
              <a href="#solution" className="scroll-nav-link-block w-inline-block">
                <div className="scroll-nav-text"
                  style={{opacity: "0", filter: "blur(2px)", transform: "translate3d(5px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(20deg, 0deg)", transformStyle: "preserve-3d", display: "none"}}>
                  Package</div>
                <div className="scroll-nav-line"
                  style={{transform: "translate3d(5px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d",}}>
                </div>
              </a>
              <a href="#cta" className="scroll-nav-link-block w-inline-block">
                <div className="scroll-nav-text"
                  style={{opacity: "0", filter: "blur(2px)", transform: "translate3d(5px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(20deg, 0deg)", transformStyle: "preserve-3d", display: "none"}}>
                  Contact
                </div>
                <div className="scroll-nav-line"
                  style={{transform: "translate3d(5px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d",}}>
                </div>
              </a>
            </div>
      </div>
      <Outlet />
    </>
  );
}


export default Header
import React from "react"
import { Nav,Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
export function Librarian(){
    return(
     <>
     <Navbar bg="light" variant="light" sticky="top">
      <Nav className="me-auto">
            <LinkContainer to={'/loginlibr'}>
              <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            <LinkContainer to={'/libregister'}>
              <Nav.Link>Register</Nav.Link>
              </LinkContainer>
          </Nav>
     </Navbar>
          <div>
        <img src={require("../Images/LIB.jpg")} height="630" width="1500" />
    </div> 
        </> 
    )
}
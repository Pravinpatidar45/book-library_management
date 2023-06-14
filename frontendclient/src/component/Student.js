import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
export function Student() {
  return (
    <>
      <Navbar bg="light" sticky="top" >
        <Nav className="me-auto">
          <LinkContainer to={'/login'}>
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to={'/registration'}>
            <Nav.Link>Registration</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
      <div>
        <img src={require("../Images/Login.jpg")} height="630" width="1500" />
      </div>

    </>
  )
}

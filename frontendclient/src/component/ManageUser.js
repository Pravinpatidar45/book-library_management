import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Route, Routes } from "react-router-dom";

export function ManageUser() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Nav className="me-auto">
          <LinkContainer to={'/studentlist'}>
            <Nav.Link>Student</Nav.Link>
          </LinkContainer>
          <LinkContainer to={'/libraianlist'}>
            <Nav.Link>Librarian</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
      <div>
        <img src={require("../Images/userlib.jpg")} height="630" width="1500" />
      </div>
    </>
  )
}
import { Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
export function BookNav() {
    return (

        <Navbar bg="light" variant="light" sticky="top">
            <Nav className="me-auto">
                <LinkContainer to={'/issuebook'}>
                    <Nav.Link>IssueBook</Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/submitbook'}>
                    <Nav.Link>SubmitBook</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    )
}
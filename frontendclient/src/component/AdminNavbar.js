import { Navbar, Container, Nav } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
export function AdminNavbar() {
    return (
        <div>
        <Navbar bg="light" variant="light" sticky="top">
                    <Nav className="me-auto">
                        <LinkContainer to={'/managebook'}>
                            <Nav.Link>ManageBook</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/manageuser'}>
                            <Nav.Link >ManageUser</Nav.Link>
                        </LinkContainer>
                    </Nav>
            </Navbar>
        </div>
    )
}
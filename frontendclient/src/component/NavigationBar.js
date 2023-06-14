import {Navbar,Container,Nav} from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'
export function NavigationBar(){
    return(
      <>
<Navbar bg="dark"variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Library</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to={'/'}>
              <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            <LinkContainer to={'/adminlogin'}>
              <Nav.Link >Admin</Nav.Link>
              </LinkContainer>
            <LinkContainer to ={'/student-page'}>
               <Nav.Link >Student</Nav.Link>
               </LinkContainer>
            <LinkContainer to={'/librarian-page'}>
              <Nav.Link >Librarian</Nav.Link>
              </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      </>
    );
}
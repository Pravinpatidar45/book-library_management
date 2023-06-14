import { Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import { AsignBook } from './AsignBook.js';
import { ReceiveBook } from './ReceiveBook.js';
import { Routes,Route } from "react-router-dom";
import { AssignBooklist } from "./AssignBooklist.js";
export function BookLibNav() {
    return (
<>
        <Navbar bg="light" variant="light" sticky="top">
            <Nav className="me-auto">
                <LinkContainer to={'/assignbook'}>
                    <Nav.Link>AsignBook</Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/receivebook'}>
                    <Nav.Link>ReceiveBook</Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/assignbooklist'}>
                    <Nav.Link>AssignBookList</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
        <Routes>
        <Route path='/assignbook'element={<AsignBook></AsignBook>}/>
          <Route path="/receivebook" element={<ReceiveBook></ReceiveBook>}/>
        <Route path='/assignbooklist'element={<AssignBooklist></AssignBooklist>}/>
        </Routes>
</>
    )
}
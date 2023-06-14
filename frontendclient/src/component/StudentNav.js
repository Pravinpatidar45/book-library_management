import { Routes, Route } from "react-router-dom"
import { SubmitBook } from './SubmitBook.js';
import { IssueBook } from './IssueBook.js';
import { NavigationBar } from "./NavigationBar.js";
import { BookNav } from "./BookNav.js";
export function StudentNav() {
    return (
        <div>
           <NavigationBar></NavigationBar>
           <BookNav></BookNav>
            <Routes>
                <Route path="/issuebook" element={<IssueBook></IssueBook>} />
                <Route path="/submitbook" element={<SubmitBook></SubmitBook>} />
            </Routes>
        </div>
    )
}
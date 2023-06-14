import React from "react";
import { Routes, Route } from "react-router-dom";
import { ManageBook } from './ManageBook.js';
import { ManageUser } from './ManageUser.js';
import { StudentList } from './StudentList.js';
import { LibrarianList } from './LibrarianList.js';
import { AdminNavbar } from "./AdminNavbar.js";
import { NavigationBar } from "./NavigationBar.js";

export function Admin() {
  return (
    <div>
      <NavigationBar></NavigationBar>
    <AdminNavbar></AdminNavbar>
      <Routes>
        <Route path="/managebook" element={<ManageBook></ManageBook>} />
        <Route path="/manageuser" element={<ManageUser></ManageUser>} />
        <Route path='/studentlist' element={<StudentList></StudentList>} />
        <Route path='/libraianlist' element={<LibrarianList></LibrarianList>} />
      </Routes>
  </div>
  )
}



import React, { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
export function AssignBooklist() {
    const [bookList, setBooklist] = useState([]);

    const handleButtonClick = () => {
        axios.get("http://localhost:6090/issuebook/showAll/").then(res => {
            if (res.data!=null) {
                setBooklist(res.data);
            } else {
                alert("Data not Found");
            }
        }).catch(err => {
            alert("something went wrong")
        });
    }
    return (
        <div>
            <center>

                <button type="submit" className="list" onClick={handleButtonClick}> Click Show All AssignBookList</button>
                <Table striped bordered hover variant="dark" >
                    <thead>
                        <tr>
                            <th>Book Id</th>
                            <th>Student Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {
                        bookList.map((item) => (
                            <tbody>
                                <tr>
                                    <td>{item.bid}</td>
                                    <td>{item.sname}</td>
                                    <td>{item.bookstatus}</td>
                                </tr>
                            </tbody>
                        ))
                    }
                </Table>
            </center>
        </div>
    );
}

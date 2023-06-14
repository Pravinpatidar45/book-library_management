import React, { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
export function LibrarianList() {
    const [libList, setLiblist] = useState([]);
    const [uid, setUid] = useState();
    const [status, setStatus] = useState();

    const handleUid = (evt) => {
        setUid(evt.target.value);
    }
    const handleStatus = (evt) => {
        setStatus(evt.target.value);
    }
    const handleButtonClick = () => {
        axios.get("http://localhost:6090/librarian/showAll/").then(res => {
            if (res.data != null) {
                setLiblist(res.data);
            } else {
                alert("Data not Found");
            }
        }).catch(err => {
            alert("something went wrong")
        });
    }
    const handleSubmit = () => {
        axios.get("http://localhost:6090/librarian/editlibrarian/" + uid + "/" + status).then(
            res => {
                if (res.status == 200) {
                    alert("Status updated")
                } else {
                    alert("status not updated")
                }
            }).catch(err => {
                alert("something went wrong")
            });

    }
    const handleClear = () => {
        setLiblist([]);
    }

    return (
        <div>
            <center>
                <tr>
                    <td>
                        <button type="submit" className="list" onClick={handleButtonClick}> Click Show All StudentList</button>
                    </td><td>
                        <button type="submit" style={{ marginLeft: "5px"}} onClick={handleClear}> Clear</button>
                    </td>
                </tr>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Librarian Id</th>
                            <th>Librarian Name</th>
                            <th>Collage Code</th>
                            <th>Librarian Status</th>
                        </tr>
                    </thead>
                    {
                        libList.map((item) => (
                            <tbody>
                                <tr>
                                    <td>{item.uid}</td>
                                    <td>{item.fullname}</td>
                                    <td>{item.collageCode}</td>
                                    <td>{item.status}</td>
                                </tr>
                            </tbody>
                        ))
                    }
                </Table><div className="block">
                    <h1>Manage Status</h1>
                <tr>
                    <td>Librarian Id</td>
                    <td>
                        <input type="text" placeholder="Enter Librarian Id" onChange={handleUid} />
                    </td>
                </tr>
                <tr >
                    <td >Librarian Status</td>
                    <select onClick={handleStatus}style={{marginTop:"10px"}}>
                        <option value="active" >Active</option>
                        <option value="anactive">Anactive</option>
                    </select>
                </tr>
                <tr>
                    <td>
                        <button type="submit" style={{marginTop:"10px"}}onClick={handleSubmit}>submit</button>
                    </td>
                </tr>
                </div>
            </center>
        </div>
    );
}

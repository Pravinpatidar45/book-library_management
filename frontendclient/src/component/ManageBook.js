import React, { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
export  function ManageBook() {
    const [bcode, setBcode] = useState();
    const [bname, setBname] = useState();
    const [bprice, setBprice] = useState();
    const [mylist, setMylist] = useState([]);

    const handleBcodeText = (evt) => {
        setBcode(evt.target.value);
    }
    const handleBnameText = (evt) => {
        setBname(evt.target.value);
    }
    const handleBprice = (evt) => {
        setBprice(evt.target.value);
    }
    const handleButtonClick = (evt) => {
        if (evt.target.name === "btnsave") {
            var obj = {
                bcode: bcode,
                bname: bname,
                bprice: bprice
            }
            //call save api
            axios.post("http://localhost:6090/book/save", obj).then
                (res => { alert("Data saved"); }
                ).catch(err => {
                    alert("something went wrong");
                })
        }
        else if (evt.target.name === "btnsearch") {
            var scode = bcode;
            //call search api
            axios.get("http://localhost:6090/book/search/" + scode).then
                (res => {
                    if (res.data != null) {
                        alert("Data Found");
                        setBcode(res.data.bcode);
                        setBname(res.data.bname);
                        setBprice(res.data.bprice);
                    }
                    else {
                        alert("Data not found");
                    }
                }
                ).catch(err => {
                    alert("something went wrong");
                });
        }
        else if (evt.target.name === "btnupdate") {

            //call update api
            axios.get("http://localhost:6090/book/editbook/" + bcode + "/" + bname + "/" + bprice).then(
                res => {
                    if (res.status == 200) {
                        alert("Data updated")
                    } else {
                        alert("data not updated")
                    }
                }).catch(err => {
                    alert("something went wrong")
                });

        } else if (evt.target.name === "btndelete") {
            var dcode = bcode;
            //call delete api
            axios.get("http://localhost:6090/book/deletebook/" + bcode).then(
                res => {
                    if (res.status == 200) {
                        alert("Data Deleted")
                    } else {
                        alert("data not Deleted")
                    }
                }).catch(err => {
                    alert("something went wrong")
                });

        } else if (evt.target.name === "btnshow") {
            axios.get("http://localhost:6090/book/showAll/").then(res => {
                if (res.data != null) {
                    setMylist(res.data);
                } else {
                    alert("Data not Found");
                }
            }).catch(err => {
                alert("something went wrong")
            });
        }

        else if (evt.target.name === "btnclear") {
            setBcode(" ");
            setBname(" ");
            setBprice(" ");
            setMylist([]);
        }
    }
    return (
        <div style={{ marginTop: "30px" }} id="book">
            <center>
            <h1>STUDENT LIBRARY</h1>
            <table>
                <tr>
                    <td>Book Code</td>
                    <td>
                        <input type="number" onChange={handleBcodeText} />
                    </td>
                </tr>
                <tr>
                    <td>Book Name</td>
                    <td>
                        <input type="text" onChange={handleBnameText} value={bname} />
                    </td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>
                        <input type="number" onChange={handleBprice} value={bprice} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type="submit" name="btnsave" onClick={handleButtonClick}>Save</button>
                        <span>    </span>
                        <button type="submit" name="btnsearch" onClick={handleButtonClick}>Search</button>
                    </td>
                    <td>
                        <button type="submit" name="btnupdate" onClick={handleButtonClick}>Update</button>
                        <span>    </span>
                        <button type="submit" name="btndelete" onClick={handleButtonClick}>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type="submit" name="btnshow" onClick={handleButtonClick}>Show All</button>
                    </td>
                    <td>

                        <button type="submit" name="btnclear" onClick={handleButtonClick}>Clear</button>
                    </td>
                </tr>
            </table>
        </center>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Book Code</th>
                        <th>Book Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {
                    mylist.map((item) => (
                        <tbody>
                            <tr>
                                <td>{item.bcode}</td>
                                <td>{item.bname}</td>
                                <td>{item.bprice}</td>
                            </tr>
                        </tbody>
                    ))
                }
            </Table>
        </div>
    );
}
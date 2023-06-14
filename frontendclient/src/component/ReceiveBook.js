import React, { useState, useEffect } from "react";
import '../App.css';
import axios from "axios";
export function ReceiveBook() {
    const [bid, setBid] = useState([]);
    const [sid, setSid] = useState();
    const [sname, setSname] = useState();
    const [sclassName, setSclassName] = useState();
    const [bookstatus, setBookstatus] = useState();
    const [mylist, setMylist] = useState([]);

    const handleBid = (evt) => {
        setBid(evt.target.value);
    }
    const handleSid = (evt) => {
        setSid(evt.target.value);
    }
    const handleSname = (evt) => {
        setSname(evt.target.value);
    }
    const handleSclassName = (evt) => {
        setSclassName(evt.target.value);
    }
    const handleBookstatus = (evt) => {
        setBookstatus(evt.target.value);
    }
    const handleReceiveBook = () => {
        axios.get("http://localhost:6090/submitbook/editbook/" + sid + "/" + sname + "/" + sclassName + "/" + bid + "/" + bookstatus).then(
            res => {
                if (res.status == 200) {
                    alert("Book Data updated")
                } else {
                    alert("data not updated")
                }
            }).catch(err => {
                alert("something went wrong")
            });
    }
    useEffect(() => {
        axios.get("http://localhost:6090/book/showAll/").then(res => {
            if (res.data != null) {
                setMylist(res.data);

            } else {
                alert("Data not Found");
            }
        }).catch(err => {
            alert("something went wrong")
        });
    });
    return (
        <>
            <div className="dbook">
                <center>
                    <h1 style={{ marginTop: "30px" }}>Receive Book Library</h1>
                    <br></br>
                    <table>
                        <tr>
                            <td>Student Id </td>
                            <td>
                                <input type="text" placeholder="Student id" onChange={handleSid} />
                            </td>
                        </tr>
                        <tr>
                            <td>Student Name </td>
                            <td>
                                <input type="text" placeholder="Student Name" onChange={handleSname} />
                            </td>
                        </tr>
                        <tr>
                        <td>Student Classname </td>
                        <select name="cars" className="select" onChange={handleSclassName}>
                            <option value="9th" selected>9th</option>
                            <option value="10th">10th</option>
                            <option value="11th">11th</option>
                            <option value="12th">12th</option>
                        </select>
                    </tr>
                        <tr>
                            <td>Book Name </td>
                            <td>
                                <select onClick={handleBid} className="select" >
                                    {
                                        mylist.map((item) => (
                                            <option value={item.bcode}>{item.bname}</option>
                                        ))
                                    }
                                </select>
                            </td>
                        </tr>
                        <tr>
                        <td>Book Status </td>
                        <select  className="select" onClick={handleBookstatus}>
                            <option selected >IssueBook</option>
                            <option >Submitbook</option>
                            </select>
                        </tr>
                        <br></br>
                        <tr>
                            <td>
                                <button type="submit" onClick={handleReceiveBook}>Submit</button>
                            </td>
                        </tr>
                    </table>
                </center>
            </div>
        </>
    )
}
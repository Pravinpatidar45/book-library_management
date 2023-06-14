import React, { useState } from "react";
import axios from "axios";

export default function LibRegister() {
    const [uid, setUid] = useState();
    const [upass, setUpass] = useState();
    const [fullname, setFullName] = useState();
    const [gender, setGender] = useState();
    const [city, setCity] = useState();
    const [collageCode, setCollageCode] = useState();
    const [regDate, setRegDate] = useState();
    const [status, setStatus] = useState();

    const handleUidText = (evt) => {
        setUid(evt.target.value);
    }
    const handleUpassText = (evt) => {
        setUpass(evt.target.value);
    }
    const handleFullNameText = (evt) => {
        setFullName(evt.target.value);
    }
    const handleGender = (evt) => {
        setGender(evt.target.value);
    }
    const handleCity = (evt) => {
        setCity(evt.target.value);
    }
    const handleCollageCode = (evt) => {
        setCollageCode(evt.target.value);
    }
    const handleRegDate = (evt) => {
        setRegDate(evt.target.value);
    }
    const handleStatus = (evt) => {
        setStatus(evt.target.value);
    }
    const handleRegButton = () => {
        let obj = {
            uid: uid,
            upass: upass,
            fullname: fullname,
            gender: gender,
            city: city,
            collageCode: collageCode,
            regDate: regDate,
            status: status
        };
        axios.post("http://localhost:6090/librarian/registration", obj).then(res => console.log(res.data)).then(alert("Registration Successfully"));
    }
    return (
        <div style={{ marginTop: "30px" }} className="register">
            <center>

                <h1>Registration From</h1>
                <br></br>
                <table>
                    <tr>
                        <td>User Id</td>
                        <td>
                            <input type="text" placeholder="User ID" onChange={handleUidText} />
                        </td>
                    </tr>
                    <tr>
                        <td>Full name</td>
                        <td>
                            <input type="text" placeholder="Full name" onChange={handleFullNameText} />
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type="password" placeholder="Password" onChange={handleUpassText} />
                        </td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>
                            male <input type="radio" onChange={handleGender} name="gender" /> Female <input type="radio" onChange={handleGender} name="gender" />
                        </td>
                    </tr>
                    <tr>
                        <td>city</td>
                            <select name="city" id="city" className="select" onChange={handleCity}>
                                <option value="indore" selected>Indore</option>
                                <option value="khargone">Khargone</option>
                                <option value="bhopal">Bhopal</option>
                                <option value="ujjain">Ujjain</option>
                            </select>
                    </tr>
                    <tr>
                        <td>Collage Code</td>
                        <td>
                            <input type="number" placeholder=" Enter Collage code" onChange={handleCollageCode} />
                        </td>
                    </tr>
                    <tr>
                        <td>Register Date</td>
                        <td>
                            <input type="Date" onChange={handleRegDate} />
                        </td>
                    </tr>
                    <tr>
                        <td>Status</td>
                            <select name="status" id="status"className="select" onChange={handleStatus}>
                                <option value="Active" selected>Active</option>
                                <option value="Anactive">Anactive</option>
                            </select>
                    </tr>
                    <br></br>
                    <tr>
                        <td>
                            <button type="submit" onClick={handleRegButton}>Register me</button>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    );
} 
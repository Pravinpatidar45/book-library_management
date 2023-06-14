import React, { useState } from "react";
import axios from "axios";

export default function Register() {
    const [uid, setUid] = useState();
    const [upass, setUpass] = useState();
    const [fullname, setFullName] = useState();
    const [classname, setClassname] = useState();
    const [gender, setGender] = useState();
    const [city, setCity] = useState();
    const [stuEnroll, setStuEnroll] = useState();
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
    const handleClassName = (evt) => {
        setClassname(evt.target.value);
    }
    const handleGender = (evt) => {
        setGender(evt.target.value);
    }
    const handleCity = (evt) => {
        setCity(evt.target.value);
    }
    const handleStuEnroll = (evt) => {
        setStuEnroll(evt.target.value);
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
            classname: classname,
            gender: gender,
            city: city,
            stuEnroll: stuEnroll,
            regDate: regDate,
            status: status
        };
        axios.post("http://localhost:6090/student/registration", obj).then(res => console.log(res.data)).then(alert("Registration Successfully"));
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
                        <td>classname</td>
                        <select name="cars" className="select" onChange={handleClassName}>
                            <option value="9th" selected>9th</option>
                            <option value="10th">10th</option>
                            <option value="11th">11th</option>
                            <option value="12th">12th</option>
                        </select>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>
                            male <input type="radio" onChange={handleGender} name="gender" /> Female <input type="radio" onChange={handleGender} name="gender" />
                        </td>
                    </tr>
                    <tr>
                        <td>city</td>
                        <select name="city" className="select" onChange={handleCity}>
                            <option value="indore"selected>Indore</option>
                            <option value="khargone">Khargone</option>
                            <option value="bhopal">Bhopal</option>
                            <option value="ujjain">Ujjain</option>
                        </select>
                    </tr>
                    <tr>
                        <td>Student Enrollment</td>
                        <td>
                            <input type="number" placeholder="student Enrollment" onChange={handleStuEnroll} />
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
                        <select name="status" className="select" onChange={handleStatus}>
                            <option value="active" selected>Active</option>
                            <option value="anactive">Anactive</option>
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
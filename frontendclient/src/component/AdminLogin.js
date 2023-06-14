import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import FailurePage from "./FailurePage.js"
import { Admin } from "./Admin.js";
import { BrowserRouter } from "react-router-dom";

export function AdminLogin() {
    const [uid, setUid] = useState();
    const [upass, setUpass] = useState();
    
    const handleTextChange = (evt) => {
        if (evt.target.name === "tbuid") {
            setUid(evt.target.value);
        }
        else if (evt.target.name === "tbupass") {
            setUpass(evt.target.value);
        }
    }
    const handleButtonClick = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        if (uid === "admin" && upass === "12345") {
            root.render(
                <BrowserRouter>
                    <Admin/>
                </BrowserRouter>
            );
        } else {
            root.render
                (
                    <BrowserRouter>
                        <FailurePage/>
                    </BrowserRouter>
                );
        }
    }
    const handleClear = () => {
        setUid("");
        setUpass("");
    }
    return (
        <div style={{marginTop:"30px"}} className="login">
            <center>

                <h1> Admin Login</h1>
                <table className="log">
                    <tr>
                        <td>User Id</td>
                        <td>
                            <input type="text" name="tbuid" onChange={handleTextChange} placeholder="Input User ID" />
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type="password" name="tbupass" onChange={handleTextChange} placeholder="Input User password" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" name="btnlogin" onClick={handleButtonClick}>Login</button>
                        </td>
                        <td>
                            <button type="submit" name="btnclear" onClick={handleClear}>Clear</button>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    );
}


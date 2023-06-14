import React, { useState } from "react";
import axios from "axios";
import FailurePage from "./FailurePage.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StudentNav } from "./StudentNav";

export default function Login() {
    const [uid, setUid] = useState();
    const [upass, setUpass] = useState();
    const [isLogedin, setIsLogedin] = useState(false);
    const root = ReactDOM.createRoot(document.getElementById('root'));

    const handleUidText = (evt) => {
        setUid(evt.target.value);
    }
    const handleUpassText = (evt) => {
        setUpass(evt.target.value);
    }
    const handleLogedinButton=()=>{
        axios.get("http://localhost:6090/student/login/"+uid+"/"+upass).then(res=>{
            if(res.data!=null){
                root.render(
                    <BrowserRouter>
                        <StudentNav/>
                    </BrowserRouter>
                )
            }
            else{
                root.render(
                    <BrowserRouter>
                        <FailurePage/>
                    </BrowserRouter>
                )
            }
        });
    }
    return (
        <div style={{marginTop:"30px"}} className="login">
            <center>
          <h1>User Login</h1>
          <table className="log">
            <tr>
                <td>User Id</td>
                <td>
                    <input type="text"onChange={handleUidText}/>
                </td>
            </tr>
            <tr>
                <td>User Password</td>
                <td>
                    <input type="password" onChange={handleUpassText}/>
                </td>
            </tr>
            <tr>
                <td>
                    <button type="submit" onClick={handleLogedinButton}>Login</button>
                </td>
            </tr>
          </table>
          </center>
        </div>
    );
}
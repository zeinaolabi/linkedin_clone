import React, {useState} from "react";
import axios from "axios";
const baseURL = "http://127.0.0.1:8000/auth/login";

const LoginFrom = () => {

    const [input, setInput] = useState({email:"", password:""});
    const [error, setError ] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        
        await axios.post(baseURL, input)
        .then( response => {
            localStorage.setItem("id", response.data.user._id);
            localStorage.setItem("token", "Bearer " + response.data.access_token);
            localStorage.setItem("type", response.data.user.user_type_id);
            console.log(response)
            // window.location.reload()
        })
        .catch((error) =>{
            setError(error.response.data.message)
        });
    }

    return(
        <div className="login_container" >
            <div className="header">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="logo"></img>
            </div>
            
            <div className="login_form">
                <p className="login_header">Make the most of your professional life</p>
                <div className="login_form_content">
                    <div className="form_content">
                        <label className="inputfield">
                            <span>Email</span>
                            <input type="text" className="textfield" onChange={(e) =>setInput({...input, email: e.target.value})}></input>
                        </label>
                        <label className="inputfield">
                            <span>Password (6 or more characters)</span>
                            <input type="password" className="textfield" onChange={(e) =>setInput({...input, password: e.target.value})}></input>
                        </label>

                        <div className="terms">
                            <p>By clicking Agree & Join, you agree to the LinkedIn <span className="blueText">User Agreement</span>, <span className="blueText">Privacy Policy</span>, and <span className="blueText">Cookie Policy</span>.</p>
                        </div>

                        <button className="login_btn" onClick={submit}>Agree & Join</button> 

                        <p className="create_account">Already on LinkedIn? <button className="transparent_btn"><span className="blueText">Sign in</span></button></p>
                        {(error !== "") ? <span className="error_message">{error}</span> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginFrom;
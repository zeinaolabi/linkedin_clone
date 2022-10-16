import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Footer from "../../components/footer";
import {validateEmail, validatePassword} from './validators';
const baseURL = "http://127.0.0.1:8000/auth/login";

const LoginFrom = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({email:"", password:""});
    const [error, setError ] = useState("");

    const submit = async (e) => {
        e.preventDefault();

        const isValidEmail = validateEmail(input.email);
        const isValidPassword = validatePassword(input.password);
    
        if(!isValidEmail.status){
            setError(isValidEmail.message);
            return;
        } 

        if(!isValidPassword.status){
            setError(isValidPassword.message);
            return;
        }
        
        await axios.post(baseURL, input)
        .then( response => {
            localStorage.setItem("id", response.data.user._id);
            localStorage.setItem("token", "Bearer " + response.data.token);
            localStorage.setItem("type", response.data.user.user_type_id);

            setError("");
            naviagteToLanding();
        })
        .catch((error) =>{
            setError(error.response.data.message)
        });
    }

    const navigateToResgisteration = () => {
        navigate('/register');
    };

    const naviagteToLanding = () => {
        navigate('/');
    };

    return(
        <div className="login_container" >
            <div className="header">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="logo"></img>
            </div>
            
            <div className="login_form">
                <div className="login_form_content">
                    <div className="login_content">
                        <h1>Sign in</h1>
                        <p className="login_text">Stay updated on your professional world</p>

                        <input type="text" placeholder="Email" className="textfield" onChange={(e) =>setInput({...input, email: e.target.value})}></input>
                        <input type="password" placeholder="Password" className="textfield" onChange={(e) =>setInput({...input, password: e.target.value})}></input>

                        <button className="blue_btn" onClick={submit}>Sign in</button> 

                        {(error !== "") ? <span className="error_message">{error}</span> : ""}
                    </div>
                    <p className="create_account">New to LinkedIn? <button onClick={navigateToResgisteration} className="transparent_btn"><span className="blueText">Sign up</span></button></p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default LoginFrom;
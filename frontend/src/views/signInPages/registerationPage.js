import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Footer from "../../components/footer";
import {validateEmail, validatePassword} from './validators';
const baseURL = "http://127.0.0.1:8000/auth/register";

const RegisterationForm = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({email:"", password:"", user_type_id:null});
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
        
        axios.post(baseURL, input)
        .then( response => {
            localStorage.setItem("id", response.data._id);
            localStorage.setItem("token", "Bearer " + response.data.token);
            localStorage.setItem("type", response.data.user_type_id);

            setError("")
            window.location.reload()
        })
        .catch((error) =>{
            setError("Invalid Input")
        });
    }

    const handleChange = e => {
        const value = e.target.value;
        setInput({...input, user_type_id: value});
    };

    const navigateToLogin = () => {
        navigate('/login');
    };

    return(
        <div className="registeration_container" >
            <div className="header">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="logo"></img>
            </div>
            
            <div className="registeration_form">
                <p className="register_header">Make the most of your professional life</p>
                <div className="register_form_content">
                    <div className="form_content">
                        <label className="inputfield">
                            <span>Email</span>
                            <input type="text" className="textfield" onChange={(e) =>setInput({...input, email: e.target.value})}></input>
                        </label>
                        <label className="inputfield">
                            <span>Password (6 or more characters)</span>
                            <input type="password" className="textfield" onChange={(e) =>setInput({...input, password: e.target.value})}></input>
                        </label>

                        <div className="radio_container">
                            <span>Sign in as: </span>
                            <div className="radio_buttons">
                                <label>
                                    <input type="radio" value="1" name="user_type" onChange={handleChange}/> 
                                    <span>Company</span>
                                </label>
                                <label>
                                    <input type="radio" value="2" name="user_type" onChange={handleChange}/> 
                                    <span>User</span>
                                </label>
                            </div>
                        </div>

                        <div className="terms">
                            <p>By clicking Agree & Join, you agree to the LinkedIn <span className="blueText">User Agreement</span>, <span className="blueText">Privacy Policy</span>, and <span className="blueText">Cookie Policy</span>.</p>
                        </div>

                        <button className="blue_btn" onClick={submit}>Agree & Join</button> 

                        <p className="create_account">Already on LinkedIn? <button onClick={navigateToLogin} className="transparent_btn"><span className="blueText">Sign in</span></button></p>
                        {(error !== "") ? <span className="error_message">{error}</span> : ""}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default RegisterationForm;
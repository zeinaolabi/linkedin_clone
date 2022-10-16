import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const LoginFrom = () => {
    const navigate = useNavigate();

    const navigateToResgisteration = () => {
        navigate('/register');
      };

    return(
        <div className="main_container" >
   
        </div>
    )
}

export default LoginFrom;
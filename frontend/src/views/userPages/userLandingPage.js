import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import Header from "../../components/header/header";

const LoginFrom = () => {
    const navigate = useNavigate();



    return(
        <div className="main_container" >
            <Header />
   
        </div>
    )
}

export default LoginFrom;
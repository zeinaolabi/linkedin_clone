import React from "react";
import {useNavigate} from 'react-router-dom';
import './header.css';

const Header = () =>{
    const navigate = useNavigate();

    const reload = ()=> {
        window.location.reload()
    }

    const navigateToNotifications = ()=> {
        navigate('/notifications');
    };

    const navigateToProfile = ()=> {
        navigate('/profile');
    };

    const logout = (e)=> {
        e.preventDefault();

        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <div className="header">
            <div className="search_section">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo"></img>
                <input placeholder="Search by job title"></input>
            </div>

            <ul className="header_list">
                <li onClick={reload}><img src="https://cdn-icons-png.flaticon.com/512/71/71200.png"></img>Jobs</li>
                <li onClick={navigateToNotifications}><img src="https://cdn-icons-png.flaticon.com/512/565/565422.png"></img>Notifications</li>
                <li onClick={navigateToProfile}><img src="https://img.icons8.com/material/344/gender-neutral-user--v1.png"></img>Profile</li>
                <li onClick={logout}><img src="https://img.icons8.com/material/2x/exit.png"></img>Logout</li>
            </ul>
        </div>
    )
}

export default Header;
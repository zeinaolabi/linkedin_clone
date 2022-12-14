import React from "react";
import {useNavigate} from 'react-router-dom';
import './header.css';

const Header = (dataType) =>{
    const navigate = useNavigate();

    const navigateToJobs = ()=> {
        navigate('/jobs');
        window.location.reload();
    };

    const navigateToNotifications = ()=> {
        navigate('/notifications');
        window.location.reload();
    };

    const navigateToProfile = ()=> {
        navigate('/profile');
        window.location.reload();
    };

    const logout = (e)=> {
        e.preventDefault();

        localStorage.clear();
        window.location.href = '/';
    }

    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            navigate('/search_result',{state: {search: event.target.value}})
            window.location.reload();
        }
    }

    return (
        <div className="header">
            <div className="search_section">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo"></img>
                {dataType === "Company" ? <input placeholder="Search by job title" onKeyDown={handleKeyDown}></input> : ""}
            </div>

            <ul className="header_list">
                {dataType === "Company" ? <li onClick={navigateToJobs}><img src="https://cdn-icons-png.flaticon.com/512/71/71200.png" alt="jobs"></img>Jobs</li> : ""}
                {dataType === "Company" ? <li onClick={navigateToNotifications}><img src="https://cdn-icons-png.flaticon.com/512/565/565422.png" alt="notifications"></img>Notifications</li> : ""}
                {dataType === "Company" ?<li onClick={navigateToProfile}><img src="https://img.icons8.com/material/344/gender-neutral-user--v1.png" alt="profile"></img>Profile</li> : ""}
                <li onClick={logout}><img src="https://img.icons8.com/material/2x/exit.png" alt="logout"></img>Logout</li> 
            </ul>
        </div>
    )
}

export default Header;
import React from "react";
import './header.css';

const Header = () =>{
    return (
        <div className="header">
            <div className="search_section">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo"></img>
                <input placeholder="Search by job title"></input>
            </div>

            <ul className="header_list">
                <li><img src="https://cdn-icons-png.flaticon.com/512/71/71200.png"></img>Jobs</li>
                <li><img src="https://cdn-icons-png.flaticon.com/512/565/565422.png"></img>Notifications</li>
                <li><img src="https://img.icons8.com/material/344/gender-neutral-user--v1.png"></img>Profile</li>
                <li><img src="https://img.icons8.com/material/2x/exit.png"></img>Logout</li>
            </ul>
        </div>
    )
}

export default Header;
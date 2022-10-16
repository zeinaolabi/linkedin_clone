import React from "react";
import './infoDetails.css';

const InfoDetails = ({title, companyName, country, date, profile_picture}) =>{

    return (
        <div className="details_container">
            <img src= {profile_picture === undefined ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" : profile_picture} alt="profile"></img>

            <div className="details_content">
                <h3>{title}</h3>
                <span>{companyName}</span>
                <span className="gray_text">{country}</span>
                <span className="gray_text date">{date}</span>
            </div>
        </div>
    )
}

export default InfoDetails;
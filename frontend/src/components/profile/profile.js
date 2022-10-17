import React from "react";
import './profile.css';

const Profile = ({name, headline, country, city, phone_number}) => {
    return(
        <div class="profile_header">
                <div className="profile">
                    <img className="cover" src="https://www.avidcareerist.com/wp-content/uploads/2015/09/Dont-Use-This-LinkedIn-Banner-1.png" alt="cover img"></img>

                    <img className="profile_image profile_picture" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile picture"></img>
                </div>

                <div className="profile_info">
                    <div className="edit_row">
                        <span>{name}</span>
                        <button className="blue_btn">Edit Profile</button>
                    </div>

                    <span>{headline}</span>
                    <span className="bio">{country}, {city} - {phone_number}</span>
                </div>
        </div>
    )
}

export default Profile;
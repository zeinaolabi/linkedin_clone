import React from "react";
import Header from "./../../components/header/header";
import Profile from "../../components/profile/profile";

const UserProfilePage = () => {

    return(
        <div className="main_container">
            <Header />
            <div className="profile_container">
                <div className="profile_content">
                    <Profile />
                </div>
            </div>
        </div>
    )
}

export default UserProfilePage;
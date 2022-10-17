import React from "react";
import Header from "../../components/header/header";
import CompanyProfile from "../../components/profile/companyProfile";

const UserProfilePage = () => {

    return(
        <div className="main_container">
            <Header />
            <div className="profile_container">
                <div className="profile_content">
                    <CompanyProfile />
                </div>
            </div>
        </div>
    )
}

export default UserProfilePage;
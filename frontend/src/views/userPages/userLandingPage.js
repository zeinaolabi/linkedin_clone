import React from "react";
import Header from "../../components/header/header";
import InfoSection from "../../components/infoSection/infoSection";

const UserLandingPage = () => {
    return(
        <div className="main_container" >
            <Header />
            <InfoSection title="More jobs for you" description="Based on your profile and search history" />
   
        </div>
    )
}

export default UserLandingPage;
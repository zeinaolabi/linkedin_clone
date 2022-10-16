import React from "react";
import Header from "../../components/header/header";
import InfoSection from "../../components/infoSection/infoSection";
const url = "http://127.0.0.1:8000/jobs/get_notifications";

const NotificationsPage = () => {
    return(
        <div className="main_container" >
            <Header />
            <InfoSection url={url} errorMessage="No Notifications Found"/>
   
        </div>
    )
}

export default NotificationsPage;
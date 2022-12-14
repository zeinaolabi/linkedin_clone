import React from "react";
import Header from "../../components/header/header";
import InfoSection from "../../components/infoSection/infoSection";
const url = "http://127.0.0.1:8000/jobs/get_all_jobs";

const UserJobsPage = () => {
    return(
        <div className="main_container" >
            <Header />
            <InfoSection title="More jobs for you" description="Based on your profile and search history" url={url} errorMessage="No Jobs Found" dataType="Jobs"/>
   
        </div>
    )
}

export default UserJobsPage;
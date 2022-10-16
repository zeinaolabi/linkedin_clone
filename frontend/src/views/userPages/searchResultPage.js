import React from "react";
import {useLocation} from 'react-router';
import Header from "../../components/header/header";
import InfoSection from "../../components/infoSection/infoSection";
const url = "http://127.0.0.1:8000/jobs/search_for_job/";

const UserJobsPage = () => {
    const { state } = useLocation();
    const searchValue = state.search;

    console.log(url + searchValue)
    return(
        <div className="main_container" >
            <Header />
            <InfoSection title="Search Result" url={url + searchValue} errorMessage="No Jobs Found"/>
   
        </div>
    )
}

export default UserJobsPage;
import React from "react";
import { useQuery } from 'react-query';
import axios from "axios";
import Header from "./../../components/header/header";
import Profile from "../../components/profile/profile";
import InfoDetails from "../../components/infoDetails/infoDetails";
const getProfileDataAPI = "http://127.0.0.1:8000/user/get_profile/" + localStorage.getItem("id");
const getJobsAPI = "http://127.0.0.1:8000/user/get_company_jobs/" + localStorage.getItem("id");

const UserProfilePage = () => {
    const getProfileData = async () => {
        const resposne = await axios(getProfileDataAPI);
        return resposne.data;
    }

    const getJobs = async () => {
        const resposne = await axios(getJobsAPI);
        return resposne.data;
    }

    const {data: jobsData, status: jobsStatus} = useQuery('jobs', getJobs);
    const {data: profileData, status: profileStatus} = useQuery('profile', getProfileData);

    return(
        <div className="main_container">
            <Header userType="Company"/>
            <div className="profile_container">
                <div className="profile_content">
                    { profileStatus === "error" ? <div className="loading">Error Loading</div> : ""}
                    { profileStatus === "loading" ? <div className="loading">Loading..</div> : ""}
                    {
                        profileStatus === "success" ?
                        <Profile name={profileData.name} headline = {profileData.headline} country={profileData.country} city={profileData.city} phone_number={profileData.phone_number} functionality="Post"/>: ""
                    }

                    <div className="jobs_container">
                        { jobsStatus === "error" ? <div className="loading">Error Displaying Jobs</div> : ""}
                        { jobsStatus === "loading" ? <div className="loading">Loading..</div> : ""}
                        {
                            jobsStatus === "success" ?
                            jobsData.map((response)=>{
                                return(
                                    <InfoDetails id={response.job._id} title={response.job.title} company_name = {response.company_name} country={response.job.country} date={response.job.createdAt} company={response.job.company}/>
                                )}) : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfilePage;
import React from "react";
import Header from "./../../components/header/header";
import Profile from "../../components/profile/profile";
import axios from "axios";
import { useQuery } from 'react-query';
const url = "http://127.0.0.1:8000/user/get_profile/" + localStorage.getItem("id");

const UserProfilePage = () => {
    const getData = async () => {
        const resposne = await axios(url);
        return resposne.data;
    }

    const {data, status} = useQuery('users', getData);

    return(
        <div className="main_container">
            <Header userType="Company"/>
            <div className="profile_container">
                <div className="profile_content">
                    { status === "error" ? <div className="loading">Error Loading</div> : ""}
                    { status === "loading" ? <div className="loading">Loading..</div> : ""}
                    {
                        status === "success" ?
                        <Profile name={data.name} headline = {data.headline} country={data.country} city={data.city} phone_number={data.phone_number} functionality="Post"/>: ""
                    }
                </div>
            </div>
        </div>
    )
}

export default UserProfilePage;
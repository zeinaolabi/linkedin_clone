import React from "react";
import {useLocation} from 'react-router';
import Header from "../../components/header/header";
import axios from "axios";
import { useQuery } from 'react-query';
import CompanyProfile from "../../components/profile/companyProfile";

const CompanyProfilePage = () => {
    const { state } = useLocation();
    const companyID = state.id;
    const url = "http://127.0.0.1:8000/user/get_profile/" + companyID;

    const getData = async () => {
        const resposne = await axios(url);
        return resposne.data;
    }

    const {data, status} = useQuery('companyProfile', getData);

    return(
        <div className="main_container">
            <Header />
            <div className="profile_container">
                <div className="profile_content">
                { status === "error" ? <div className="loading">Error Loading</div> : ""}
                    { status === "loading" ? <div className="loading">Loading..</div> : ""}
                    {
                        status === "success" ?
                        <CompanyProfile id={data._id} name={data.name} headline = {data.headline} country={data.country} city={data.city} phone_number={data.phone_number}/>: ""
                    }
                </div>
            </div>
        </div>
    )
}

export default CompanyProfilePage;
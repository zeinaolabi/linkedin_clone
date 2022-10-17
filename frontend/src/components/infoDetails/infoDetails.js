import React, {useEffect, useState} from "react";
import axios from "axios";
import './infoDetails.css';
const applyAPI = "http://127.0.0.1:8000/jobs/apply";
const hasAppliedAPI = "http://127.0.0.1:8000/jobs/check_if_applied";
const userID = localStorage.getItem("id");

const InfoDetails = ({id, title, companyName, country, date, profile_picture, dataType}) =>{
    const [input, setInput] = useState({userID: userID, jobID: id});
    const [applied, setApplied] = useState(false);

    const apply = async (e) => {
        e.preventDefault();
        await axios.post(applyAPI, input)
        .then(response => {
            setApplied(true);
        })
    }

    const hasApplied = async (e) =>{ 
        await axios.post(hasAppliedAPI, input)
        .then(response =>{
            setApplied(response.data);
        })
    }

    useEffect(()=>{
        setInput({...input, jobID: id})
    },[id])

    if(dataType === "Jobs") hasApplied();

    return (
        <div className="details_container">
            <img src= {profile_picture === undefined ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" : profile_picture} alt="profile"></img>

            <div className="details">
                <div className="details_content">
                    <h4>{title}</h4>
                    <span>{companyName}</span>
                    <span className="gray_text">{country}</span>
                    <span className="gray_text date">{date}</span>
                </div>

                { dataType === "Jobs" ? <button onClick={apply} className="blue_btn">
                    {applied ? "Applied" : "Apply"}
                </button> : ""}
            </div>
        </div>
    )
}

export default InfoDetails;
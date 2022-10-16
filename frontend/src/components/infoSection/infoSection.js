import React from "react";
import './infoSection.css';
import InfoDetails from '../infoDetails/infoDetails';
import { useQuery } from 'react-query';
import axios from "axios";

const InfoSection = ({title, description, url, errorMessage, dataType}) =>{
    const getData = async () => {
        const resposne = await axios(url);
        return resposne.data;
    }

    const {data, status} = useQuery('jobs', getData);

    return (
        <div className="info_container">
            <div className="info_content">
                <div className="info_header">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                { status === "error" ? <div className="loading">{errorMessage}</div> : ""}
                { status === "loading" ? <div className="loading">Loading..</div> : ""}
                {
                    status === "success" ?
                    data.map((response)=>{
                        return(
                            <InfoDetails id={response._id} title={response.title} companyName = {response.company} country={response.country} date={response.createdAt} dataType={dataType}/>
                        )
                    }) : ""
                }

            </div>
        </div>
    )
}

export default InfoSection;
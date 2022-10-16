import React from "react";
import './infoSection.css';
import InfoDetails from '../infoDetails/infoDetails';
import { useQuery } from 'react-query';
import axios from "axios";

const getJobs = async () => {
    const resposne = await axios("http://127.0.0.1:8000/jobs/get_all_jobs");
    return resposne.data;
}

const InfoSection = ({title, description, dataType}) =>{
    const {data, status} = useQuery('jobs', getJobs);

    return (
        <div className="info_container">
            <div className="info_content">
                <div className="info_header">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                {
                    data.map((response)=>{
                        console.log(response)
                        return(
                            <InfoDetails title={response.title} companyName = {response.company} country={response.country} date={response.createdAt}/>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default InfoSection;
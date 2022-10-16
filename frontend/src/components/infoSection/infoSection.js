import React from "react";
import './infoSection.css';

const InfoSection = ({title, description, dataType}) =>{
    return (
        <div className="info_container">
            <div className="info_content">
                <div className="info_header">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <InfoDetails />

                {/* {
                    assignment.map((data)=>{
                        return(
                            <InfoDetails title={data.name} description={data.description} due_date={data.due_date}/>
                        )
                    })
                } */}

            </div>
        </div>
    )
}

export default InfoSection;
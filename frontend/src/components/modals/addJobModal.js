import React, {useState} from "react";
import axios from "axios";
import './modal.css';
const userID = localStorage.getItem("id");
const addJobAPI = "http://127.0.0.1:8000/jobs/add_job";
const config = {
    headers: {
      Authorization: localStorage.getItem("token")
    }
}

const AddJobModal = (props) => {
    const [input, setInput] = useState({title:"", description:"", country: "", company: userID});
    const [error, setError ] = useState("");

    const submit = async (e) =>{     
       await axios.post(addJobAPI, input, config)
        .catch(setError("Invalid Input"));
    }

    if(!props.show){
        return null
    }
    
    return(
        <div className="modal" >
            <div className="modal_content">
                <div className="modal_header">
                    <h2>Add a new Job</h2>
                    <button onClick={props.onClose} className="blue_btn">Close</button>
                </div>
                <div className="modal_body">
                    <input type="text" className="textfield" placeholder="Title" onChange={(e) =>setInput({...input, email: e.target.value})}></input>
                    <input type="text" className="textfield" placeholder="Description" onChange={(e) =>setInput({...input, description: e.target.value})}></input>
                    <input type="text" className="textfield" placeholder="Country" onChange={(e) =>setInput({...input, country: e.target.value})}></input>
                </div>
                <div className="modal_footer">
                    <button onClick={event => submit()} className="blue_btn">Submit</button>
                    {(error !== "") ? <span className="error_message">{error}</span> : ""}
                </div>
            </div>
        </div>
    )
}

export default AddJobModal;
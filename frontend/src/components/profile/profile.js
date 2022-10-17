import React, {useState, useEffect} from "react";
import AddJobModal from "../../components/modals/addJobModal";
import './profile.css';

const Profile = (props) => {
    const [data, setData] = useState({name: "", headline: "", country: "", city: "", phone_number: ""});
    const [showModal, setShow] = useState(false); 

    useEffect(()=>{
        setData({name: props.name, headline: props.headline, country: props.country, city: props.city, phone_number: props.phone_number})
    },[props])
    return(
        <div className="profile_header">
                <div className="profile">
                    <label>
                        <img className="cover" src="https://www.avidcareerist.com/wp-content/uploads/2015/09/Dont-Use-This-LinkedIn-Banner-1.png" alt="cover"></img>
                        <input type="file" name="myImage" accept="image/png, image/*" hidden/>
                    </label>

                    <label>
                        <img className="profile_image profile_picture" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile"></img>
                        <input type="file" name="myImage" accept="image/*" hidden/>
                    </label>
                </div>

                <div className="profile_info">
                    <div className="edit_row">
                        <h3>{data.name}</h3>
                        <button onClick={() => {setShow(true);}} className="blue_btn">{props.functionality === "Post" ? "Post Job" : "Edit Profile"}</button>
                    </div>

                    <h4>{data.headline}</h4>
                    <span className="bio">{data.country}, {data.city} - {data.phone_number}</span>
                </div>

            <AddJobModal onClose={()=>setShow(false)} show={showModal}/>
        </div>
    )
}

export default Profile;
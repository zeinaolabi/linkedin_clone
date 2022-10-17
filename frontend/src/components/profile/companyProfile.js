import React, {useState, useEffect} from "react";
import axios from "axios";
import './profile.css';
const followAPI = "http://127.0.0.1:8000/user/follow_company";
const unfollowAPI = "http://127.0.0.1:8000/user/unfollow_company";
const isFollowedAPI = "http://127.0.0.1:8000/user/is_followed";

const Profile = (props) => {
    const [data, setData] = useState({name: "", headline: "", country: "", city: "", phone_number: ""});
    const [input, setInput] = useState({userID: localStorage.getItem("id"), companyID: props.id});
    const [followState, setFollow] = useState();

    useEffect(()=>{
        setData({name: props.name, headline: props.headline, country: props.country, city: props.city, phone_number: props.phone_number});
        setInput({...input, companyID: props.id})
    },[props])

    const isFollowed = async () =>{ 
        await axios.post(isFollowedAPI, input)
        .then(response => setFollow(response.data))
    }

    isFollowed();

    const follow = async () => {
        await axios.post(followAPI, input)
        .then(setFollow(true))
    }

    const unfollow = async () => {
        await axios.post(unfollowAPI, input)
        .then(setFollow(false))
    }

    return(
        <div className="profile_header">
                <div className="profile">
                    <img className="cover" src="https://www.avidcareerist.com/wp-content/uploads/2015/09/Dont-Use-This-LinkedIn-Banner-1.png" alt="cover"></img>
                    <img className="profile_image profile_picture" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile"></img>
                </div>

                <div className="profile_info">
                    <div className="edit_row">
                        <span>{data.name}</span>
                        <button className="blue_btn" onClick={() => followState ? unfollow() : follow()}>{followState ? "Unfollow" : "Follow"}</button>
                    </div>

                    <span>{data.headline}</span>
                    <span className="bio">{data.country}, {data.city} - {data.phone_number}</span>
                </div>
        </div>
    )
}

export default Profile;
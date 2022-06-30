import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unfollowUser, followUser } from "../reducer/loginReducer";

const User =({person})=>{
    const dispatch = useDispatch();
    const id = person._id;
    const{result}=useSelector((state)=>state.login.data)
    const [following, setFollowing]= useState(person.followers.includes(result._id) )
  const  handleFollow=()=>{
     following? dispatch(unfollowUser({id,result})):dispatch(followUser({id,result}))
     setFollowing(!following)
  }
    return(
        <div className="follower">
        <div>
            <img src={person.profilepicture?process.env.REACT_APP_PUBLIC_FOLDER+person.profilepicture:
                process.env.REACT_APP_PUBLIC_FOLDER+"img7.jpg"} alt="img" className="followerimage" />
            <div className="name">
                <span>{person.firstname}</span>
                <span>{person.username}</span>
            </div>
        </div>
        <button className={ following?"button button1": "button fcButton"} onClick={handleFollow}>
            {following?"Unfollow":"Follow"}
        </button>
    </div>
    )
}
export default User;
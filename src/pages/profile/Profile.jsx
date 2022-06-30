import React from "react"
import Profileleft from "../../components/profilecomponents/profileleft/Profileleft";
import Profilecard from "../../components/Profilecard";
import Postside from "../../components/Postside";
import Rightside from "../../components/Rightside";
import './profile.css';

const Profile = ()=>{
    return(
        <>
           <div className="profile">
             <Profileleft/>
             <div className="profilecenter">
                <Profilecard/>
                <Postside/>   
             </div>
             <Rightside/>
           </div>
        </>
    )
}
export default Profile;
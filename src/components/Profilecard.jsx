import React from "react";
import './profilecard.css';
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom";

const Profilecard = ({location}) => {
    const data = useSelector((state) => state.login.data.result)
    const post = useSelector((state)=>state.image.data);
    return (
        <>
            <div className="profilecard">
                <div className="profileimage">
                    <img src={data.coverpicture ? process.env.REACT_APP_PUBLIC_FOLDER + data.coverpicture :
                        process.env.REACT_APP_PUBLIC_FOLDER + 'img1.jpg'} alt="not found" />
                    <img src={data.profilepicture ? process.env.REACT_APP_PUBLIC_FOLDER + data.profilepicture :
                        process.env.REACT_APP_PUBLIC_FOLDER + 'img7.jpg'} alt="not found" />
                </div>
                <div className="profilename">
                    <span>{data.firstname} {data.lastname}</span>
                    <span>{data.worksat ? data.worksat : 'About Your Self '}</span>
                </div>
                <div className="followstatus">
                    <hr />
                    <div>
                        <div className="follow">
                            <span>{data.following.length}</span>
                            <span>Following</span>
                        </div>
                        <div className="vl"></div>
                        <div className="follow">
                            <span>{data.followers.length}</span>
                            <span>Followers</span>
                        </div>
                        {location!=='profilepage' && (
                            <>
                                <div className="vl"></div>
                                <div className="follow">
                                    <span>{post.filter((i)=>i.userId===data._id).length}</span>
                                    <span>Posts</span>
                                </div>
                            </>
                        )}
                    </div>
                    <hr />
                </div>
                {location!=='profilepage' ? " " : <span><Link to={`/profile/${data._id}`}>My Profile</Link></span>}
            </div>
        </>
    )
}
export default Profilecard;
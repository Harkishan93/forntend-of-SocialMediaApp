import React from "react"
import Postshare from "./Postshare";
import Post from "./Post";
import './postSide.css';

const Postside = ()=>{
    return(
        <>
           <div className="postside">
             <Postshare/>
             <Post/>
           </div>
        </>
    )
}
export default Postside;
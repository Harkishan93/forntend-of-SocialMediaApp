import React from "react"
import Followercard from "./Followercard";
import Logosearch from "./Logosearch";
import Profilecard from "./Profilecard";
import './profileside.css';

const Profileside = ()=>{
    return(
        <>
           <div className="profileside">
             <Logosearch/>
             <Profilecard location="profilepage"/>
             <Followercard/>
           </div>
        </>
    )
}
export default Profileside;
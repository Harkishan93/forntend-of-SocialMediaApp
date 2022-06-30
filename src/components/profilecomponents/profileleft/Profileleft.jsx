import React from "react"
import Logosearch from '../../Logosearch'
import Followercard from '../../Followercard'
import Profileinfo from "../profileinfo/Profileinfo";
import './profileleft.css';

const Profileleft = ()=>{
    return(
        <>
           <div className="profileleft">
             <Logosearch/>
             <Profileinfo/>
             <Followercard/>
           </div>
        </>
    )
}
export default Profileleft;
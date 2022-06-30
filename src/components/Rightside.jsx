import React,{useState} from "react"
import './rightside.css';
import Trendcard from "./Trendcard";
import {Link} from "react-router-dom"
import {MdComment, MdHome, MdNotifications, MdSettings} from 'react-icons/md'
import Sharemodal from "./modal/Sharemodal";

const Rightside = ()=>{
    const [Modalopen, setModalopen]= useState(false);

    return(
        <>
           <div className="Rightside">
               <div className="navicon">
                <Link to={`/home`}><MdHome/></Link>
                <MdSettings/>
                <MdNotifications/>
                <MdComment/>
               </div>
               <Trendcard/>
               <button onClick={()=>setModalopen(true)} className="button rbutton">Share</button>
               <Sharemodal modalopen={Modalopen} modalset={setModalopen}/>
           </div>
        </>
    )
}
export default Rightside;
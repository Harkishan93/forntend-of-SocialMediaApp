import React from "react"
import './trendcard.css';
import { Trenddata } from "../Data/Trenddata";

const Trendcard = ()=>{
    return(
        <>
           <div className="trendcard">
            <h3>Trends for you</h3>
            {
                Trenddata.map((value, index)=>{
                   return(
                    <div className="trend" key={index}>
                        <span>#{value.name}</span>
                        <span>{value.shares}k shares</span>
                    </div>
                   )
                })
            }
           </div>
        </>
    )
}
export default Trendcard;
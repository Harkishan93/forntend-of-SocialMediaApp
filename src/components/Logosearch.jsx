import React from "react"
import './logosearch.css';
import './profileside.css';
import logo from '../img/logo1.ico'
import {FaSearch} from 'react-icons/fa'
const Logosearch = ()=>{
    return(
        <>
           <div className="logosearch">
             <img src={logo} alt="not found"/>
             <div className="search">
                <input type="text" name="" id="" placeholder="#Explore"/>
                <div className="sicon"><FaSearch/></div>
             </div>
           </div>
        </>
    )
}
export default Logosearch;
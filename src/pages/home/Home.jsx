import React,{useEffect} from "react"
import Postside from "../../components/Postside";
import Profileside from "../../components/Profileside";
import Rightside from "../../components/Rightside";
import {useDispatch} from "react-redux"
import { localUser } from "../../reducer/loginReducer";
import './home.css';
const Home = ()=>{
   
    return(
        <>
           <div className="Home">
            <Profileside/>
            <Postside/>
            <Rightside/>
           </div>
        </>
    )
}
export default Home;
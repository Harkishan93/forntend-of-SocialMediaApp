import React,{useState, useEffect} from "react"
import {useSelector} from 'react-redux'
import './followercard.css';
import User from "./User";
const Followercard = () => {
    const [person, setPersons]=useState([]);
    const{result}=useSelector((state)=>state.login.data)
      
    useEffect(()=>{
     const fetchAllUser = async()=>{
      const data = await fetch('http://localhost:4444/user',{
        method:"GET",
        headers: {
            Accept:"application/json",
            "Content-Type": "application/json"
        },
        credentials:"include"
      })
      const userdata = await data.json()
      setPersons(userdata)
     }
     fetchAllUser();
    },[])

    return (
        <>
            <div className="Followercard">
                <h3>People you may know</h3>
                {
                   person.map((person, index) => {
                    if(result._id!==person._id){
                        return <User person={person} key={index}/>
                        }
                    })
                }
            </div>
        </>
    )
}
export default Followercard;
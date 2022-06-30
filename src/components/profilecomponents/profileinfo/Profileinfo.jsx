import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import './profileinfo.css';
import { MdOutlineEdit } from 'react-icons/md'
import Sharemodal from "../../modal/Modal";
import { logout } from "../../../reducer/loginReducer"

const Profileinfo = () => {
    const params = useParams();
    const dispatch = useDispatch()
    const userId = params.id;
    const { result } = useSelector((state) => state.login.data);
    const [user, setUser] = useState({});
    useEffect(()=>{
        const fetchUser = async () => {
            if (userId === result._id) {
                setUser(result)
            } else {
                const user1 = await fetch(`http://localhost:4444/user/${userId}`, {
                    method: "GET",
                    headers: {
                        Accept:"application/json",
                        "Content-Type": "application/json"
                    },
                    credentials:"include"
                })
                const userdata = await user1.json();
                setUser(userdata)
            }
        }
        fetchUser();
    },[result])

    const logouthandling = () => {
        dispatch(logout())
    }

    const [Modalopen, setModalopen] = useState(false);
    return (
        <>
            <div className="profileinfo">
                <div className="infohead">
                    <h4>Your Info</h4>
                    {userId === result._id ? (<div>
                        <MdOutlineEdit onClick={() => setModalopen(true)} style={{ cursor: 'pointer', border: '1px solid gray', borderRadius: '4px' }} />
                        <Sharemodal user = {user} currentUser={result} setUser={setUser} modalopen={Modalopen} modalset={setModalopen} />
                    </div>) : ""}

                </div>
                <div className="info">
                    <span>
                        <b>About</b>
                    </span>
                    <span> {user.about}</span>
                </div>
                <div className="info">
                    <span>
                        <b>Status</b>
                    </span>
                    <span> {user.relationship}</span>
                </div>
                <div className="info">
                    <span>
                        <b>Live in</b>
                    </span>
                    <span> {user.livesin}</span>
                </div>
                <div className="info">
                    <span>
                        <b>Works at</b>
                    </span>
                    <span> {user.worksat} </span>
                </div>
                <button onClick={logouthandling} className="button logoutbtn">Logout</button>
            </div>
        </>
    )
}
export default Profileinfo;
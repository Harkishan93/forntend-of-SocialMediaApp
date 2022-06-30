import React, { useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import './auth.css';
import { userSingup } from "../../reducer/signupReducer";
import { loginAuth} from "../../reducer/loginReducer";
import logo from '../../img/logo1.ico';
const Auth = () => {
    const [isSingup, setSingup] = useState(true);
    const [password, setPassword] = useState(false);
    const [form, setForm] = useState({ firstname: "", lastname: "", username: "", password: "", cpassword: "" });
    const dispatch = useDispatch();
    let statevalue = useSelector((state) => state.singup.loading);
    let loginstate = useSelector((state) => state.login.loading);
    const formhandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const resetform = () => {
        setPassword(false);
        setForm({ firstname: "", lastname: "", username: "", password: "", cpassword: "" })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (isSingup) {
            if (form.password !== form.cpassword) {
                setPassword(true);

            } else {
                dispatch(userSingup(form))
                setPassword(false);

            }
        } else {
            dispatch(loginAuth(form))
        }
    }
    return (
        <div className="auth">
            <div className="a_left">
                <img src={logo} alt="Not" />
                <div className="webname">
                    <h1>MHM Media</h1>
                    <h6>Freedom of expression</h6>
                </div>
            </div>
            <div className="a_right">
                <form className=" infoform" onSubmit={submitHandler}>
                    <h3>{isSingup ? "Sing Up" : "Login"}</h3>
                    {isSingup && <div>
                        <input onChange={formhandler} value={form.firstname} type="text" placeholder="First Name" className="infoinput" name="firstname" />
                        <input onChange={formhandler} value={form.lastname} type="text" placeholder="Last Name" className="infoinput" name="lastname" />
                    </div>}
                    <div>
                        <input onChange={formhandler} value={form.username} type="text" placeholder="Username" className="infoinput" name="username" />
                    </div>
                    <div>
                        <input onChange={formhandler} value={form.password} type="password" placeholder="Password" className="infoinput" name="password" />
                        {isSingup && <input onChange={formhandler} value={form.cpassword} type="password" placeholder="Conform-Password" className="infoinput" name="cpassword" />}
                    </div>
                    {password && <span style={{ alignSelf: "flex-end", fontSize: "small", paddingRight: '10px', color: "red" }}>conformPassword is NOT same*</span>}
                    <div>
                        <span onClick={() => { setSingup(!isSingup); resetform(); }} style={{ fontSize: "13px", cursor: "pointer", color: "darkblue" }}>
                            {isSingup ? "Already have an account. Login!" : "Don't have an account?. Sing up !"}
                        </span>
                    </div>
                    <button className="button btn" type="submit" disabled={statevalue === true || loginstate === true ? true : false}>
                        {statevalue === true ? "loading..." : isSingup ? "Sing up" : loginstate === true ? "loading..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Auth;
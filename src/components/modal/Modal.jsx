import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
import { Modal } from '@mantine/core';
import {useDispatch,useSelector} from 'react-redux';
import {updateUser} from '../../reducer/loginReducer'

function Modalinfo({ modalopen, modalset, user,currentUser,setUser }) {
    const [form, setForm]=useState({});
    const [profilepicture, setProfilepicture]=useState('');
    const [coverpicture, setCoverpicture]=useState('');
    const { result } = useSelector((state) => state.login.data);
    const params = useParams();
    const dispatch = useDispatch();
    const id = params.id
    const currentid = currentUser._id
    const data = {...form,currentid:currentid}
    const formHandler=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const imageHandler=(e)=>{
            if(e.target.name==="coverpicture"||e.target.name==="profilepicture"){
                if(e.target.files){
                    if(e.target.name==="coverpicture"){
                        setProfilepicture(e.target.files[0])
                    }
                    if(e.target.name==="profilepicture"){
                        setCoverpicture(e.target.files[0])
                    }
                }
            }
       }
    
    const submitHandler = (e)=>{
        e.preventDefault();
         const formdata = new FormData();
           formdata.append("coverpicture",coverpicture)
           formdata.append("profilepicture",profilepicture)
           const upload =async()=>{
                     await fetch(`http://localhost:4444/profileimage/${id}`,{
                        method:"PUT",
                        body:formdata,
                        headers: {
                            Accept:"application/json",
                            "Content-Type": "application/json"
                        },
                        credentials:"include"
                     })
           }
           upload();
           dispatch(updateUser({id,data}))
           modalset(false)
    }
    
    return (
        <>
            <Modal
                opened={modalopen}
                size='55%'
                onClose={() => modalset(false)}
                title="Your Info"
            >
                <form className='infoform' onSubmit={submitHandler} encType='multipart/form-data'>
                    <div>
                        <input type="text" onChange={formHandler} name="firstname" value={form.firstname} className='infoinput'  placeholder='First Name' />
                        <input type="text" onChange={formHandler} value={form.lastname} className='infoinput' name="lastname" placeholder='Last Name' />
                    </div>
                    <div>
                        <input type="text" onChange={formHandler} value={form.worksat} className='infoinput' name="worksat" placeholder='Works At' />
                        <input type="text" onChange={formHandler} value={form.about} className='infoinput' name="about" placeholder='About Your Self' />
                    </div>
                    <div>
                        <input type="text" onChange={formHandler} value={form.livesin} className='infoinput' name="livesin" placeholder='Lives In' />
                        <input type="text" onChange={formHandler} value={form.country} className='infoinput' name="country" placeholder='Country' />
                    </div>
                    <div>
                        <input type="text" onChange={formHandler} value={form.relationship} className='infoinput' name="relationship" placeholder='RelationShip Status' />
                    </div>
                    <div>
                        Profile Image
                        <input type="file" onChange={imageHandler} name="coverpicture"  />
                        Cover Image
                        <input type="file" onChange={imageHandler} name="profilepicture" />
                    </div>
                    <button className='button btn'>Update</button>
                </form>
            </Modal>

        </>
    );
}
export default Modalinfo;
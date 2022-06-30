import React, { useState, useRef } from "react"
import { useSelector, useDispatch } from 'react-redux';
import './postshare.css';
import Profilimage from "../img/img7.jpg";
import { TbPhoto } from 'react-icons/tb'
import { RiVideoLine } from 'react-icons/ri'
import { GoLocation } from 'react-icons/go'
import { VscCalendar, VscClose } from 'react-icons/vsc'
import { uploadImageResult, updatePost } from "../reducer/uploadimageReducer";
const Postshare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const dispatch = useDispatch(); 
    const desc =useRef();
    const{result}=useSelector((state)=>state.login.data);
    const {loadingPost}=useSelector((state)=>state.image)
    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(img)
        }
    }
    const reset =()=>{
        setImage(null);
        desc.current.value=""
    }

    const handleSubmit=(e)=>{
       e.preventDefault();
       let data;
       const newPost={
        userId:result._id,
        desc: desc.current.value
       }
       if(image){
        data = new FormData();
        const filename = Date.now() + image.name;
        data.append("name", filename)
        data.append("file", image)
        newPost.image=filename
       
       try {
        dispatch(uploadImageResult(data))
       } catch (error) {
         console.log({"error":error.message
        })
       }
       dispatch(updatePost(newPost))
       reset();
    }
    }
    return (
        <>
            <div className="postshare">
                <img src={result.profilepicture?process.env.REACT_APP_PUBLIC_FOLDER+result.profilepicture:
                process.env.REACT_APP_PUBLIC_FOLDER+"img7.jpg"} alt="not found" />
                <div>
                    <input type='text' name="desc" ref={desc} placeholder="what's happening" required/>
                    <div className="postoption">
                        <div className="option" style={{ color: 'darkgreen' }} onClick={() => imageRef.current.click()}>
                            <TbPhoto />
                            Photo
                        </div>
                        <div className="option" style={{ color: 'darkblue' }}>
                            <RiVideoLine />
                            Video
                        </div>
                        <div className="option" style={{ color: 'darkred' }}>
                            <GoLocation />
                            Location
                        </div>
                        <div className="option" style={{ color: 'darkorange' }}>
                            <VscCalendar />
                            Shedule
                        </div>
                        <button onClick={handleSubmit} className="button psbutton" disabled={loadingPost===true? true:false}>
                        {loadingPost===true? "loading...": "Share"} 
                        </button>
                        <div style={{ display: 'none' }}>
                            <input type='file' name="myImage" ref={imageRef} onChange={onImageChange} />
                        </div>
                    </div>
                    {image && (
                        <div className="previewimage">
                           <VscClose style={{cursor:'pointer'}} onClick={()=>setImage(null)}/>
                           <img src={URL.createObjectURL(image)} alt="Not" />
                        </div>
                    )
                    }
                </div>
            </div>
        </>
    )
}
export default Postshare;
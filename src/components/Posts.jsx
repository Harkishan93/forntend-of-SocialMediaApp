import React,{useState} from "react"
import './posts.css';
import heart from '../img/heart.svg'
import comment from '../img/comment.svg'
import plan from '../img/plane.svg'
import heart1 from '../img/redheart.svg'
import {useSelector} from 'react-redux'
import {newLikes} from '../Data/Post'

const Posts = ({data})=>{
    const {result} = useSelector((state)=>state.login.data);
    const [liked, setLiked]=useState(data.likes.includes(result._id))
    const [likes, setLikes]=useState(data.likes.length)
    const callLike = ()=>{
        setLiked((prev)=>!prev);
        setLikes(liked?likes-1:likes+1)
        newLikes(data._id,result)
    }
    
    return(
        <>
           <div className="post">
             <img src={data.image? process.env.REACT_APP_PUBLIC_FOLDER+data.image :" " }alt="Not"/>
             <div className="postReact">
                  <img onClick={callLike} src={liked? heart1: heart} alt="Not" />
                  <img src={comment} alt="Not" />
                  <img src={plan} alt="Not" />
             </div>
             <span style={{color:"gray", fontSize:"12px"}}>{likes} likes</span>
             <div className="detial">
                 <span><b>{data.name}</b></span>
                 <span> {data.desc}</span>
             </div>
           </div>
        </>
    )
}
export default Posts;
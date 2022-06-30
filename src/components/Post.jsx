import React,{ useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import { timelinePost } from "../reducer/uploadimageReducer"; 
import Posts from "./Posts";
import './post.css';
import { useParams } from "react-router-dom";
 
const Post = ()=>{
   const params =useParams();
   const result1 = useSelector((state)=>state.login.data.result);
   let {data,loadingTimeline} = useSelector((state)=>state.image)
   const dispatch = useDispatch()
   useEffect(()=>{
      dispatch(timelinePost(result1))
   },[])
 if(!data) return "NO POSTS"
 if(params.id){data=data.filter((value)=>value.userId===params.id)}
    return(
        <>
           <div className="posts">
             {
               loadingTimeline===false? data.map((value, index)=>{
                   return <Posts data={value} key={index} id={index}/>
                }): "Loading....."
             }
           </div>
        </>
    )
}
export default Post;
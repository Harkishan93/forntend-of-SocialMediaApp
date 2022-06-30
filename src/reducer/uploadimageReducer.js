
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const uploadImageResult = createAsyncThunk(
    'image1',
    async(data)=>{
        try {
            let result = await fetch("http://localhost:4444/upload",{
                method:"POST",
                body:data,
                headers: {
                    Accept:"application/json",
                    "Content-Type": "application/json"
                },
                credentials:"include"

            })
          return result =  await result.json();
        } catch (error) {
            console.log({"error":error.message});
        }
    }
)
const updatePost = createAsyncThunk(
    'image2',
    async(data)=>{
        try {
            let result = await fetch("http://localhost:4444/post",{
                method:"POST",
                body:JSON.stringify(data),
                headers: {
                    Accept:"application/json",
                    "Content-Type": "application/json"
                },
                credentials:"include"
                
            })
          return result =  await result.json();
        } catch (error) {
            console.log({"error":error.message});
        }
    }
)
const timelinePost =createAsyncThunk(
    'image3',
    async({_id})=>{
        try {
            let result = await fetch(`http://localhost:4444/post/${_id}/timeline`,{
                method:"GET", 
                credentials:"include",
                headers:{
                    Accept:"application/json",
                    "Content-Type": "application/json"
                }
            })
          return result =  await result.json();
        } catch (error) {
            console.log({"error":error.message});
        }
    }
)
 
const initialState={
    message:"",
    loading:"false",
    messagePost:"",
    loadingPost:"false",
    messageTimeline:"",
    loadingTimeline:"false",
    data:[]

}

const uploadImage = createSlice({
    name:"image",
    initialState,
    reducers:{},
    extraReducers:{
        [uploadImageResult.fulfilled]:(state,action)=>{
            
            state.loading=false
            state.message=action.payload
        },
        [uploadImageResult.pending]:(state,action)=>{

            state.loading=true
        },
        [updatePost.fulfilled]:(state,action)=>{
            
            state.loadingPost=false
            state.messagePost=action.payload
        },
        [updatePost.pending]:(state,action)=>{

            state.loadingPost=true
        },
        [timelinePost.fulfilled]:(state,action)=>{
            
            state.loadingTimeline=false
            state.data=action.payload
        },
        [timelinePost.pending]:(state,action)=>{

            state.loadingTimeline=true
        },
    }

});
export { uploadImageResult, updatePost,timelinePost }
export default uploadImage.reducer
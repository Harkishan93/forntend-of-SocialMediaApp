


export const newLikes = async(postId, userId )=>{
   
     try {
        const fetchlikes = await fetch(`http://localhost:4444/post/${postId}/wish`,{
            method:"PUT",
            body:JSON.stringify({userId:userId._id}),
            headers: {
                Accept:"application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        });

     const result = await fetchlikes.json();
     } catch (error) {
        console.log(error.message)
     }
}

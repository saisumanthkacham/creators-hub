

export const isVideoLiked=(state,id)=>{
   
    return state.videosLiked.some(video=>video._id===id)
}
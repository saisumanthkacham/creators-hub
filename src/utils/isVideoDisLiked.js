export const isVideoDisLiked=(state,id)=>{
   
    return state.videosDisLiked.some(video=>video._id===id)
}
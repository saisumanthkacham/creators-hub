export const isVideoDisLiked=(state,id)=>{
   
    return state.videosDisLiked.some(video=>video.id===id)
}
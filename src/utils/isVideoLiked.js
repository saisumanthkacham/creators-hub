

export const isVideoLiked=(state,id)=>{
   
    return state.videosLiked.some(video=>video.id===id)
}
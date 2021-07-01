export const isVideoExistInHistory=(state,id)=>{
   
    return state.videosHistory.some(video=>video.id===id)
}


export const isVideoSaved=(state,id)=>{
   
    return state.videosSaved.some(video=>video.id===id)
}
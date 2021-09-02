

export const isVideoSaved=(state,id)=>{
   
    return state.videosSaved.some(video=>video?._id===id)
}
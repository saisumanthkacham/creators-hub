
export const isVideoExistInPlayList=(state,name,vid)=>{
    const playList= state?.videosPlayList.find(item=>item.name===name)
    return playList.videos.some(video=>video._id===vid?._id)
}
export const isPlayListAlreadyExist=(state,name)=>{

    const playList= state?.videosPlayList.some(item=>item.name===name)
    
    return   playList
}
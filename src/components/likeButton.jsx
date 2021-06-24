import {isVideoLiked} from "../utils/isVideoLiked"
import { useVideo } from "../contexts/videosContext"

export const LikeButton=(item)=>{
    const {videosState,videosDispatch}=useVideo()
    return <>
             {isVideoLiked(videosState,item.id)
        ? <i onClick={()=>videosDispatch({type:"REMOVE-FROM-LIKED-VIDEOS",payLoad:{video:item}})} className="fas fa-thumbs-up"></i>
        : <i onClick={()=>{
                            videosDispatch({type:"ADD-TO-LIKED-VIDEOS",payLoad:{video:item}})
                            videosDispatch({type:"REMOVE-FROM-DISLIKED-VIDEOS",payLoad:{video:item}})
                            }} className="far fa-thumbs-up"></i>}



    </>
}
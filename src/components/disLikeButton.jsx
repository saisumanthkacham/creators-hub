import { isVideoDisLiked } from "../utils/isVideoDisLiked"
import { useVideo } from "../contexts/videosContext"

export const DisLikeButton=(item)=>{
    const {videosState,videosDispatch}=useVideo()

 return <>
    
    {"200"}{isVideoDisLiked(videosState,item.id)
        ? <i onClick={()=>videosDispatch({type:"REMOVE-FROM-DISLIKED-VIDEOS",payLoad:{video:item}})} className="fas fa-thumbs-down"></i>
        : <i onClick={()=>{
                            videosDispatch({type:"ADD-TO-DISLIKED-VIDEOS",payLoad:{video:item}});
                            videosDispatch({type:"REMOVE-FROM-LIKED-VIDEOS",payLoad:{video:item}})
                            }} className="far fa-thumbs-down"></i>}
    
    
     </>
}
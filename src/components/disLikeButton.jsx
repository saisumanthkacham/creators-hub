import { isVideoDisLiked } from "../utils/isVideoDisLiked"
import { useVideo } from "../contexts/videosContext"
import { useVideoStatistics } from "../contexts/videosStatisticsContext"
import { isVideoLiked } from "../utils/isVideoLiked"

export const DisLikeButton=({item})=>{

    const {videosState,videosDispatch}=useVideo()
    const {videoStatisticsState,videoStatisticsDispatch}= useVideoStatistics()
    const disLikes= videoStatisticsState.disLikes?.find(vid=>vid?.id===item?.id)
    
 return <>
    
    {disLikes?.count}disLikes
    {isVideoDisLiked(videosState,item?.id)
        ? <i onClick={()=>{ 
                            videosDispatch({type:"REMOVE-FROM-DISLIKED-VIDEOS",payLoad:{video:item}})
                            videoStatisticsDispatch({type:"DECREMENT-DISLIKE",payLoad:{id:item.id}})
                            }} className="fas fa-thumbs-down" id="activated-btn"></i> 
        : <i onClick={()=>{
                            videoStatisticsDispatch({type:"INCREMENT-DISLIKE",payLoad:{id:item.id}})
                            isVideoLiked(videosState,item.id)&& videoStatisticsDispatch({type:"DECREMENT-LIKE",payLoad:{id:item.id}})
                            videosDispatch({type:"ADD-TO-DISLIKED-VIDEOS",payLoad:{video:item}});
                            videosDispatch({type:"REMOVE-FROM-LIKED-VIDEOS",payLoad:{video:item}})
                            }} className="far fa-thumbs-down" id="not-activated-btn"></i>}
    
    
     </>
}
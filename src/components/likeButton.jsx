import {isVideoLiked} from "../utils/isVideoLiked"
import { useVideo } from "../contexts/videosContext"
import { useVideoStatistics } from "../contexts/videosStatisticsContext"
import { isVideoDisLiked } from "../utils/isVideoDisLiked"


export const LikeButton=({item})=>{
    const {videosState,videosDispatch}=useVideo()
    const {videoStatisticsState,videoStatisticsDispatch}= useVideoStatistics()
    const likes= videoStatisticsState.likes?.find(vid=>vid?.id===item?.id)
    return <>
            
             
       
        {isVideoLiked(videosState,item?.id)
        ? <div className="center">
                    {likes?.count}&nbsp; 
                    <i onClick={()=>{
                                    videosDispatch({type:"REMOVE-FROM-LIKED-VIDEOS",payLoad:{video:item}})
                                    videoStatisticsDispatch({type:"DECREMENT-LIKE",payLoad:{id:item.id}})
                                    }} className="fas fa-thumbs-up icon-sm" id="activated-btn"></i>
                                    </div>
        : <div className="center">
                    {likes?.count}&nbsp;
                    <i onClick={()=>{
                                    isVideoDisLiked(videosState,item.id)&&videoStatisticsDispatch({type:"DECREMENT-DISLIKE",payLoad:{id:item.id}})
                                    videoStatisticsDispatch({type:"INCREMENT-LIKE",payLoad:{id:item.id}})
                                    videosDispatch({type:"ADD-TO-LIKED-VIDEOS",payLoad:{video:item}})
                                    videosDispatch({type:"REMOVE-FROM-DISLIKED-VIDEOS",payLoad:{video:item}})
                                    }} className="far fa-thumbs-up red-font icon-sm " id="not-activated-btn"></i>
                                    </div>}

    </>
}
import {isVideoLiked} from "../../utils/isVideoLiked"
import { useVideo } from "../../contexts/videosContext"
import { useVideoStatistics } from "../../contexts/videosStatisticsContext"
import { isVideoDisLiked } from "../../utils/isVideoDisLiked"
import { addVideoToLikedVidsOnServerFn, removeVideoFromLikedVidsOnServerFn,removeVideoFromDisLikedVidsOnServerFn } from "../../apiCalls"
import { useAuth } from "../../contexts/authContext"

export const LikeButton=({item})=>{

    // hooks
    const {videosState,videosDispatch}=useVideo()
    const {videoStatisticsState,videoStatisticsDispatch}= useVideoStatistics()
    const likes= videoStatisticsState.likes?.find(vid=>vid?.id===item?.id)
    const {authState:{userId}}=useAuth()
    
    
    // custom functions
    const activeLikeButtonHandler=async()=>{
        await removeVideoFromLikedVidsOnServerFn(item,userId)
        videosDispatch({type:"REMOVE-FROM-LIKED-VIDEOS",payLoad:{video:item}})
        videoStatisticsDispatch({type:"DECREMENT-LIKE",payLoad:{id:item._id}})
    }
    const nonActiveLikeButtonHandler=async()=>{
        await addVideoToLikedVidsOnServerFn(item,userId)
        videoStatisticsDispatch({type:"INCREMENT-LIKE",payLoad:{id:item._id}})
        videosDispatch({type:"ADD-TO-LIKED-VIDEOS",payLoad:{video:item}})
        isVideoDisLiked(videosState,item._id)
                        &&(async()=>{
                            await removeVideoFromDisLikedVidsOnServerFn(item,userId)
                            videoStatisticsDispatch({type:"DECREMENT-DISLIKE",payLoad:{id:item._id}})
                            videosDispatch({type:"REMOVE-FROM-DISLIKED-VIDEOS",payLoad:{video:item}})
                        })()        
    }


    return <>
              
       
        {isVideoLiked(videosState,item?._id)
        ? <div className="center">
                    {likes?.count}&nbsp; 
                    <i onClick={activeLikeButtonHandler} className="fas fa-thumbs-up icon-sm" id="activated-btn"></i>
                    </div>
        : <div className="center">
                    {likes?.count}&nbsp;
                    <i onClick={nonActiveLikeButtonHandler} className="far fa-thumbs-up primary-font icon-sm " id="not-activated-btn"></i>
                    </div>}

    </>
}
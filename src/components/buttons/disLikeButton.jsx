import { isVideoDisLiked } from "../../utils/isVideoDisLiked"
import { useVideo } from "../../contexts/videosContext"
import { useVideoStatistics } from "../../contexts/videosStatisticsContext"
import { isVideoLiked } from "../../utils/isVideoLiked"
import {useAuth} from "../../contexts/authContext"
import {removeVideoFromDisLikedVidsOnServerFn,addVideoToDisLikedVidsOnServerFn,removeVideoFromLikedVidsOnServerFn} from "../../apiCalls"

export const DisLikeButton=({item})=>{

    // hooks
    const {videosState,videosDispatch}=useVideo()
    const {authState:{userId}}=useAuth()
    const {videoStatisticsState,videoStatisticsDispatch}= useVideoStatistics()
    const disLikes= videoStatisticsState.disLikes?.find(vid=>vid?.id===item?.id)
    
    // custom functions
    const activeDisLikeButtonHandler=async()=>{
        await removeVideoFromDisLikedVidsOnServerFn(item,userId)
        videosDispatch({type:"REMOVE-FROM-DISLIKED-VIDEOS",payLoad:{video:item}})
        videoStatisticsDispatch({type:"DECREMENT-DISLIKE",payLoad:{id:item._id}})
    }
    const nonActiveDisLikeButtonHandler=async()=>{
        await addVideoToDisLikedVidsOnServerFn(item,userId)
        videoStatisticsDispatch({type:"INCREMENT-DISLIKE",payLoad:{id:item._id}})
        videosDispatch({type:"ADD-TO-DISLIKED-VIDEOS",payLoad:{video:item}});
        isVideoLiked(videosState,item._id)
                        && (async()=>{
                                await removeVideoFromLikedVidsOnServerFn(item,userId)
                                videosDispatch({type:"REMOVE-FROM-LIKED-VIDEOS",payLoad:{video:item}})
                                videoStatisticsDispatch({type:"DECREMENT-LIKE",payLoad:{id:item._id}})
                            })()
        
    }


 return <>
     
    {isVideoDisLiked(videosState,item?._id)
        ? <div className="center">
                {disLikes?.count}&nbsp;
                <i onClick={activeDisLikeButtonHandler} className="fas fa-thumbs-down icon-sm" id="activated-btn"></i>
          </div>
        : <div className="center">
              {disLikes?.count}&nbsp;
              <i onClick={nonActiveDisLikeButtonHandler} className="far fa-thumbs-down primary-font icon-sm" id="not-activated-btn"></i>
          </div>}
    
    
     </>
}
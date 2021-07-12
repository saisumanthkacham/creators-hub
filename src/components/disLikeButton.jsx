import { isVideoDisLiked } from "../utils/isVideoDisLiked"
import { useVideo } from "../contexts/videosContext"
import { useVideoStatistics } from "../contexts/videosStatisticsContext"
import { isVideoLiked } from "../utils/isVideoLiked"

export const DisLikeButton=({item})=>{

    const {videosState,videosDispatch}=useVideo()
    const {videoStatisticsState,videoStatisticsDispatch}= useVideoStatistics()
    const disLikes= videoStatisticsState.disLikes?.find(vid=>vid?.id===item?.id)
    
    // custom functions
    const activeDisLikeButtonHandler=()=>{
        videosDispatch({type:"REMOVE-FROM-DISLIKED-VIDEOS",payLoad:{video:item}})
        videoStatisticsDispatch({type:"DECREMENT-DISLIKE",payLoad:{id:item.id}})
    }
    const nonActiveDisLikeButtonHandler=()=>{
        videoStatisticsDispatch({type:"INCREMENT-DISLIKE",payLoad:{id:item.id}})
        isVideoLiked(videosState,item.id)&& videoStatisticsDispatch({type:"DECREMENT-LIKE",payLoad:{id:item.id}})
        videosDispatch({type:"ADD-TO-DISLIKED-VIDEOS",payLoad:{video:item}});
        videosDispatch({type:"REMOVE-FROM-LIKED-VIDEOS",payLoad:{video:item}})
    }
 return <>
    
    
    {isVideoDisLiked(videosState,item?.id)
        ? <div className="center">
                {disLikes?.count}&nbsp;
                <i onClick={activeDisLikeButtonHandler} className="fas fa-thumbs-down icon-sm" id="activated-btn"></i>
          </div>
        : <div className="center">
              {disLikes?.count}&nbsp;
              <i onClick={nonActiveDisLikeButtonHandler} className="far fa-thumbs-down red-font icon-sm" id="not-activated-btn"></i>
          </div>}
    
    
     </>
}
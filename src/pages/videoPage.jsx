import ReactPlayer from "react-player/youtube"
import { useParams } from "react-router"
import { useVideo } from "../contexts/videosContext"
import { AddToPlayListButton } from "../components/addToPlayListButton"
import { DisLikeButton } from "../components/disLikeButton"
import { LikeButton } from "../components/likeButton"

export const VideoPlayer=()=>{
    const{id}=useParams()
    const {videosState,videosDispatch}=useVideo()
    const item=videosState?.videosData.find(item=>item.id===id)
    // const similarVideos=videosState.videosData.filter(vid=>vid.platform===item.platform)
    

return (<>
    <br/>
    <h1>videoPage</h1>
        
   <div className="videoPlayer-wrapper">   
        <ReactPlayer url={item?.url} playing={true} controls={true}  />
        <AddToPlayListButton item={item} />
        
       <LikeButton item={item} />
        <DisLikeButton item={item} />
       

        <i style={{cursor:"pointer"}} class="fas fa-share-alt"></i>
   </div>

    
    </>)
}
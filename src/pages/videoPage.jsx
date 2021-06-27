import ReactPlayer from "react-player/youtube"
import { useParams } from "react-router"
import { useVideo } from "../contexts/videosContext"
import { PlayListModal } from "../components/playListModal" 
import { DisLikeButton } from "../components/disLikeButton"
import { LikeButton } from "../components/likeButton"
import {useState} from "react"


export const VideoPlayer=()=>{
    
    const{id}=useParams()
    const {videosState}=useVideo()
    const item=videosState?.videosData.find(item=>item.id===id)
    // const similarVideos=videosState.videosData.filter(vid=>vid.platform===item.platform)
    const [display,setDisplay]=useState(false)

return (<>
    <br/>
    <h1>videoPage</h1>
        
        <div className={display?"video-page":"page"}>
            <ReactPlayer url={item?.url} playing={true} controls={true}  />
            {item.vName}<br/>
            {/* AddToPlayListButton */}
            <i style={{cursor:"pointer"}}  onClick={()=>setDisplay(!display)} class="fas fa-plus"></i>
            <LikeButton item={item} />
            <DisLikeButton item={item} />
            <i class="fa fa-eye" aria-hidden="true"></i>
            <i style={{cursor:"pointer"}} class="fas fa-share-alt"></i>
            <hr/>
            <div className="center" style={{width:150}}>
                <img className="cd-profile" src={item.profileUrl} alt={item.creator}/>
                {item.creator}
            </div>
            
        </div>
 
        <PlayListModal display={display} setDisplay={setDisplay}/>

    
    </>)
}
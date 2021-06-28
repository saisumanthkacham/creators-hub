import ReactPlayer from "react-player/youtube"
import { useParams } from "react-router"
import { useVideo } from "../contexts/videosContext"
import { PlayListModal } from "../components/playListModal" 
import { DisLikeButton } from "../components/disLikeButton"
import { LikeButton } from "../components/likeButton"
import {Views} from "../components/noOfViews"
import { AddToPlayListButton } from "../components/addToPlayListButton"
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
            {item?.vName}<br/>
           
            <LikeButton item={item} />
            <DisLikeButton item={item} />
            <Views item={item}/>
            <AddToPlayListButton display={display} setDisplay={setDisplay} />
            
            <i style={{cursor:"pointer"}} className="fas fa-share-alt"></i>
            <hr/>
            <div className="center" style={{width:150}}>
                <img className="cd-profile" src={item?.profileUrl} alt={item?.creator}/>
                {item?.creator}
            </div>
            
        </div>
 
        <PlayListModal display={display} setDisplay={setDisplay}/>

    
    </>)
}
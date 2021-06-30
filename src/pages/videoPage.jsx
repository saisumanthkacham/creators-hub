import ReactPlayer from "react-player/youtube"
import { useParams,useNavigate } from "react-router"
import { useVideo } from "../contexts/videosContext"
import { PlayListModal } from "../components/playListModal" 
import { DisLikeButton } from "../components/disLikeButton"
import { LikeButton } from "../components/likeButton"
import {Views} from "../components/noOfViews"
import { AddToPlayListButton } from "../components/addToPlayListButton"
import { SaveButton } from "../components/saveButton.jsx"
import {useState} from "react"
import { useVideoStatistics } from "../contexts/videosStatisticsContext.jsx"



export const VideoPlayer=()=>{
    
// hooks
    const navigate=useNavigate()
    const {videoStatisticsDispatch}=useVideoStatistics()
    const {videosState,videosDispatch}=useVideo()
// extracting video from url
    const{id}=useParams()
    const item=videosState?.videosData.find(item=>item.id===id)
// togling the display value of playList Modal
    const [display,setDisplay]=useState(false)
    const similarVideos=videosState.videosData.filter(vid=>vid.platform===item?.platform)
   
   

return (<>
    <br/>
    <h1>videoPage</h1>
        
        <div className={display?"video-page-blur":"video-page"}>

            
            <div className="player-wrapper">
                    <ReactPlayer url={item?.url} playing={true} controls={true} width="100%" height="100%" />
            
                    {item?.vName}<br/>
                    <div className="center" >
                        <Views item={item}/>
                        <div className="video-bar center">
                            <LikeButton item={item} />
                            <DisLikeButton item={item} /> &nbsp;
                            <AddToPlayListButton display={display} setDisplay={setDisplay} />
                            <SaveButton item={item}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="center" style={{width:190}}>
                        <img className="cd-profile" src={item?.profileUrl} alt={item?.creator}/>
                        {item?.creator}
                    </div>
            </div>



            <div className="similar-videos">
                <h3>similar videos</h3>
                
                    {similarVideos?.map(item=><div key={item.id} className="similar-videos-cd">
                        <img onClick={()=> {
                            navigate(`/video/${item.id}`)
                            videosDispatch({type:"ADD-TO-HISTORY",payLoad:{video:item}});
                            videoStatisticsDispatch({type:"INCREMENT-VIEW",payLoad:{id:item.id}})
                            }} className="cd-img" src={item.thumbnail} alt="" />
                        <div className="center-col history-cd-text">
                        <div >{item.vName}</div>
                        <small>{item.creator}</small>    
                        </div>
                    </div>)}
            </div>
            
            
        </div>
        
        {/* this component kept outside div's, to blur bg when modal showed up */}
        <PlayListModal display={display} setDisplay={setDisplay} video={item}/>

    
    </>)
}

import { useParams,useNavigate } from "react-router"
import { useVideo } from "../contexts/videosContext"
import {useState} from "react"
import { useVideoStatistics } from "../contexts/videosStatisticsContext.jsx"
import { Player,SimilarVideosCard,PlayListModal } from "../components/indexOfComponents"


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
// custom functions
    const videoHandler=(item)=>{
    navigate(`/video/${item.id}`)
    videosDispatch({type:"ADD-TO-HISTORY",payLoad:{video:item}});
    videoStatisticsDispatch({type:"INCREMENT-VIEW",payLoad:{id:item.id}})
}

   

return (<>
    <br/>
    <h1>videoPage</h1>
        
        <div className={display?"video-page-blur":"video-page"}>

            <Player item={item} display={display} setDisplay={setDisplay} />
        
                <div className="similar-videos">
                    <h3>similar videos</h3>
                    {similarVideos?.map(item=>
                    <SimilarVideosCard item={item} function1={videoHandler} />)}
                </div>
                
        </div>
        
            {/* this component kept outside main div, to blur bg when modal showed up */}
            <PlayListModal display={display} setDisplay={setDisplay} video={item}/>

    
    </>)
}
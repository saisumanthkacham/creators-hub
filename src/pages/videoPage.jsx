
import { useParams,useNavigate } from "react-router"
import { useVideo } from "../contexts/videosContext"
import {useState} from "react"
import { useVideoStatistics } from "../contexts/videosStatisticsContext.jsx"
import { Player,SimilarVideosCard,PlayListModal } from "../components/indexOfComponents"
import { useAuth } from "../contexts/authContext"
import { addVideoToHistoryVidsOnServerFn } from "../apiCalls"


export const VideoPlayer=()=>{
    
// hooks
    const navigate=useNavigate()
    const {videoStatisticsDispatch}=useVideoStatistics()
    const {videosState,videosDispatch}=useVideo()
    const {authState:{userId}}=useAuth()
// extracting video from url
    const{id}=useParams()
    const item=videosState?.videosData.find(item=>item._id===id)
    console.log("extracted id from vid page line 18",id)
// toggling the display value of playList Modal
    const [display,setDisplay]=useState(false)
    const similarVideos=videosState.videosData.filter(vid=>vid.platform===item?.platform)
// custom functions
    const videoHandler=async(item)=>{
        navigate(`/video/${item._id}`)
        await addVideoToHistoryVidsOnServerFn(item,userId)
        videosDispatch({type:"ADD-TO-HISTORY",payLoad:{video:item}});
        videoStatisticsDispatch({type:"INCREMENT-VIEW",payLoad:{id:item._id}})
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
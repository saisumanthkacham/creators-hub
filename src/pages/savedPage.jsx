import { useVideo } from "../contexts/videosContext"
import { useNavigate } from "react-router"
import { useVideoStatistics } from "../contexts/videosStatisticsContext.jsx"
import { VideoCardSaved } from "../components/indexOfComponents"
import { useAuth } from "../contexts/authContext"
import { addVideoToHistoryVidsOnServerFn } from "../apiCalls"


export const Saved=()=>{
    
    // hooks
    const {videosState,videosDispatch}=useVideo()
    const {videoStatisticsDispatch}=useVideoStatistics()
    const {authState:{userId}}=useAuth()
    const navigate=useNavigate()
    
    
    // custom functions
    const videoHandler=async(item)=>{
        await addVideoToHistoryVidsOnServerFn(item,userId)
        navigate(`/video/${item._id}`)
        videosDispatch({type:"ADD-TO-HISTORY",payLoad:{video:item}});
        videoStatisticsDispatch({type:"INCREMENT-VIEW",payLoad:{id:item._id}})
    }
    const removeButton=(item)=>{
        videosDispatch({type:"REMOVE-FROM-SAVED-VIDEOS",payLoad:{video:item}})
    }
    

return (<>
        <br/>
        <div className="productsListing saved-page">
       
        {videosState.videosSaved?.map(item=>
        <VideoCardSaved item={item} function1={videoHandler} Button={removeButton}/> )}
       </div>
    </>)
}
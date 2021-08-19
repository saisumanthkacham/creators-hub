import {useVideo} from "../contexts/videosContext"
import { useNavigate } from "react-router"
import { useVideoStatistics } from "../contexts/videosStatisticsContext.jsx"
import { VideoCardSaved } from "../components/indexOfComponents"
// import { fetchLikedVideosDataFromServerFn } from "../apiCalls"
// import { useEffect } from "react"


export const LikedVideos=()=>{

    // hooks
    const {videosState,videosDispatch}=useVideo()
    const {videoStatisticsDispatch}=useVideoStatistics()
    const navigate=useNavigate()

    // custom functions
    const videoHandler=(item)=>{
        navigate(`/video/${item.id}`)
        videosDispatch({type:"ADD-TO-HISTORY",payLoad:{video:item}});
        videoStatisticsDispatch({type:"INCREMENT-VIEW",payLoad:{id:item.id}})
    }
    const removeButton=(item)=>{
        videosDispatch({type:"REMOVE-FROM-LIKED-VIDEOS",payLoad:{video:item}})
    }

    // useEffect(()=>{
    //     fetchLikedVideosDataFromServerFn()
    // },[])

return <>
            
        <br/>
       
        <div className="productsListing saved-page">
            {videosState.videosLiked?.map(item=> 
            <VideoCardSaved item={item} function1={videoHandler} Button={removeButton}/>)}
        </div>
    </>
}
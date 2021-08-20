

import { useVideo } from "../contexts/videosContext.jsx"
import { useNavigate,useParams } from "react-router"
import { useVideoStatistics } from "../contexts/videosStatisticsContext.jsx"
import { SaveButton,VideoCardHome } from "../components/indexOfComponents"
import { addVideoToHistoryVidsOnServerFn } from "../apiCalls.js"
import { useAuth } from "../contexts/authContext.jsx"

export const Channel=()=>{

const {videosState,videosDispatch}=useVideo()
const {videoStatisticsDispatch}=useVideoStatistics()
const {authState:{userId}}=useAuth()
const navigate=useNavigate()

const {name}=useParams()
const filteredData= videosState.videosData.filter(item=>item.creator===name)

 // custom functions
 const videoHandler=async(item)=>{
    navigate(`/video/${item._id}`)
    await addVideoToHistoryVidsOnServerFn(item,userId)
    videosDispatch({type:"ADD-TO-HISTORY",payLoad:{video:item}});
    videoStatisticsDispatch({type:"INCREMENT-VIEW",payLoad:{id:item._id}})
}


return (<section className="body">
    <br/><h1>home page</h1>
    
    <div className="productsListing main">
        {filteredData?.map(item=> 
        <VideoCardHome item={item} function1={videoHandler} Button={SaveButton} />)}  
    </div>

    </section>)
}
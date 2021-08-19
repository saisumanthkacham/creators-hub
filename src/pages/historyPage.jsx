import { useVideo } from "../contexts/videosContext"
import { useNavigate } from "react-router"
import { useVideoStatistics } from "../contexts/videosStatisticsContext.jsx"
import { VideoCardHistory } from "../components/indexOfComponents"

export const History=()=>{

    // hooks
    const{videosState,videosDispatch}=useVideo()
    const {videoStatisticsDispatch}=useVideoStatistics()
    const navigate=useNavigate()

    // custom functions
    const videoHandler=(item)=>{
        navigate(`/video/${item.id}`)
        videoStatisticsDispatch({type:"INCREMENT-VIEW",payLoad:{id:item.id}})
    }
    const removeButton=(item)=>{
        videosDispatch({type:"REMOVE-FROM-HISTORY",payLoad:{video:item}})
    }
    

return (<>
    <br/>
    <h1>historyPage</h1>
    <div className="history-page ">
        
        {videosState.videosHistory?.map(item=>
        <VideoCardHistory item={item} function1={videoHandler} Button={removeButton} />)}
    </div>
    
    </>)
}
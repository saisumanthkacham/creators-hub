import { useVideo } from "../contexts/videosContext"
import { useNavigate,useParams } from "react-router"
import { useVideoStatistics } from "../contexts/videosStatisticsContext.jsx"
import { VideoCardPlayList } from "../components/indexOfComponents"


export const PlayList=()=>{

    // hooks
    const {videosState,videosDispatch}=useVideo()
    const {videoStatisticsDispatch}=useVideoStatistics()
    const navigate=useNavigate()
    
    // extracting the playList from the url
    const {name}= useParams()
    const playList= videosState.videosPlayList.find(item=>item.name===name)

    // custom functions
    const videoHandler=(item)=>{
        navigate(`/video/${item.id}`)
        videosDispatch({type:"ADD-TO-HISTORY",payLoad:{video:item}});
        videoStatisticsDispatch({type:"INCREMENT-VIEW",payLoad:{id:item.id}})
    }
    const removePlayListButton=(item)=>{
        videosDispatch({type:"REMOVE-FROM-PLAYLIST",payLoad:{video:item,name:name}})
    }


return (<>
        <br/>
        <div className="productsListing saved-page">
       
        {playList?.videos.map(item=>
        <VideoCardPlayList item={item} function1={videoHandler} Button={removePlayListButton}/> )}
    
       </div>
    </>)
}

// import ReactPlayer from "react-player/youtube"
import { useVideo } from "../contexts/videosContext.jsx"
import { useNavigate} from "react-router"
import { useVideoStatistics } from "../contexts/videosStatisticsContext.jsx"
import { SaveButton,VideoCardHome } from "../components/indexOfComponents"

export const Home=()=>{

// hooks
const {videosState,videosDispatch}=useVideo()
const {videoStatisticsDispatch}=useVideoStatistics()
const navigate=useNavigate()

// custom functions
const videoHandler=(item)=>{
    videosDispatch({type:"ADD-TO-HISTORY",payLoad:{video:item}});
    videoStatisticsDispatch({type:"INCREMENT-VIEW",payLoad:{id:item.id}})
    navigate(`/video/${item.id}`)
}

const channelFilterHandler=(item)=>{
    navigate(`/channel/${item.creator}`)
}



return (<section className="body">
    
    <br/>
    <h1>home page</h1>
    <div className="productsListing main">
        {videosState.videosData?.map(item=>
        <VideoCardHome item={item} function1={videoHandler} function2={channelFilterHandler} Button={SaveButton}/> )} 
    </div>
 
    </section>)
}
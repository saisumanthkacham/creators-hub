
// import ReactPlayer from "react-player/youtube"
import { useVideo } from "../contexts/videosContext.jsx"
import { useNavigate} from "react-router"
import { useVideoStatistics } from "../contexts/videosStatisticsContext.jsx"
import { SaveButton,VideoCardHome } from "../components/indexOfComponents"
import { useState } from "react"
import { PageNotFound } from "./pageNotFound.jsx"

export const Home=()=>{

// hooks
const {videosState,videosDispatch}=useVideo()
const {videoStatisticsDispatch}=useVideoStatistics()
const navigate=useNavigate()
const [filter,setFilter]=useState("videosData")

// custom functions
const videoHandler=(item)=>{
    videosDispatch({type:"ADD-TO-HISTORY",payLoad:{video:item}});
    videoStatisticsDispatch({type:"INCREMENT-VIEW",payLoad:{id:item.id}})
    navigate(`/video/${item.id}`)
}
const channelFilterHandler=(item)=>{
    navigate(`/channel/${item.creator}`)
}
const filterStates=["Youtube","Instagram","Twitter","videosLiked","videosSaved","videosHistory"]
const filteredData=videosState[filter]||videosState.videosData.filter(item=>item.platform===filter)



return (<section className="body">
    
        <br/>
        <h1>home page</h1>

        <div className=" main">

            <div className="filtersListing">
                {filterStates.map(item=><div className="filtering-btn" onClick={()=>setFilter(item)}>{item}</div>)}
            </div><br/>

            <div className="productsListing">
                {filteredData
                            ?filteredData.map((item)=>
                            <VideoCardHome item={item} function1={videoHandler} function2={channelFilterHandler} Button={SaveButton}/>)
                            :<PageNotFound text="please Login"/>} 
            </div> 

        </div>
    </section>)
}
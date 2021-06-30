import { useVideo } from "../contexts/videosContext"
import { useNavigate } from "react-router"
import { useVideoStatistics } from "../contexts/videosStatisticsContext.jsx"


export const History=()=>{

    // hooks
    const{videosState,videosDispatch}=useVideo()
    const {videoStatisticsDispatch}=useVideoStatistics()
    const navigate=useNavigate()

return (<>
    <br/>
    <h1>historyPage</h1>
    <div className="history-page ">
        
        {videosState.videosHistory?.map(item=><div key={item.id} className="history-cd">
            <img onClick={()=> {
                                navigate(`/video/${item.id}`)
                                videoStatisticsDispatch({type:"INCREMENT-VIEW",payLoad:{id:item.id}})
                                }} className="cd-img" src={item.thumbnail} alt="" />
                                
            <i onClick={()=>videosDispatch({type:"REMOVE-FROM-HISTORY",payLoad:{video:item}})} class="fas fa-times cd-wrong"></i>
            <div className="center-col history-cd-text">
                <div >{item.vName}</div>
                <small>{item.creator}</small>    
            </div>
        </div>)}
        
    </div>
    
    </>)
}
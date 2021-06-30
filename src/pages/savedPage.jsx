import { useVideo } from "../contexts/videosContext"
import { useNavigate } from "react-router"
import { useVideoStatistics } from "../contexts/videosStatisticsContext.jsx"

export const Saved=()=>{
    // hooks
    const {videosState,videosDispatch}=useVideo()
    const {videoStatisticsDispatch}=useVideoStatistics()
    const navigate=useNavigate()
    

return (<>
        <br/>
        <div className="productsListing saved-page">
       
        {videosState.videosSaved?.map(item=><div key={item.id} className="cd"> 
           
           <img className="cd-img" onClick={()=> {
               navigate(`/video/${item.id}`)
               videosDispatch({type:"ADD-TO-HISTORY",payLoad:{video:item}});
               videoStatisticsDispatch({type:"INCREMENT-VIEW",payLoad:{id:item.id}})
               }} src={item.thumbnail} alt={item.vName} />
           
          
           <div className="cd-text">
               <img className="cd-profile" src={item.profileUrl} alt={item.creator}/>
               <div className="cd-overflow-text">{item.vName}</div>
               <i style={{cursor:"pointer"}} onClick={()=>videosDispatch({type:"REMOVE-FROM-SAVED-VIDEOS",payLoad:{video:item}})} className="fas fa-times saved-cd-wrong"></i>
           </div>

           <div>
           <small className="grey-font cd-creator">{item.creator}</small>
           </div>

        </div> )}
    
       </div>
    </>)
}
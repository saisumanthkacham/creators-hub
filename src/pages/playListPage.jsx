import { useVideo } from "../contexts/videosContext"
import { useNavigate,useParams } from "react-router"
import { useVideoStatistics } from "../contexts/videosStatisticsContext.jsx"

export const PlayList=()=>{
    // hooks
    const {videosState,videosDispatch}=useVideo()
    const {videoStatisticsDispatch}=useVideoStatistics()
    const navigate=useNavigate()
    
    // extracting the playList from the url
    const {name}= useParams()
    const playList= videosState.videosPlayList.find(item=>item.name===name)

return (<>
        <br/>
        <div className="productsListing saved-page">
       
        {playList?.videos.map(item=><div key={item.id} className="cd"> 
           {console.log({vid:playList?.videos})}
           <img className="cd-img" onClick={()=> {
               navigate(`/video/${item.id}`)
               videosDispatch({type:"ADD-TO-HISTORY",payLoad:{video:item}});
               videoStatisticsDispatch({type:"INCREMENT-VIEW",payLoad:{id:item.id}})
               }} src={item.thumbnail} alt={item.vName} />
           
          
           <div className="cd-text">
               <img className="cd-profile" src={item.profileUrl} alt={item.creator}/>
               <div className="cd-overflow-text">{item.vName}</div>
               <i style={{cursor:"pointer"}} onClick={()=>videosDispatch({type:"REMOVE-FROM-PLAYLIST",payLoad:{video:item,name:name}})} className="fas fa-times saved-cd-wrong"></i>
           </div>

           <div>
           <small className="grey-font cd-creator">{item.creator}</small>
           </div>

        </div> )}
    
       </div>
    </>)
}
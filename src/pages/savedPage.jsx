import { useVideo } from "../contexts/videosContext"
import { useNavigate } from "react-router"


export const Saved=()=>{
    // hooks
    const {videosState,videosDispatch}=useVideo()
    const navigate=useNavigate()
    

return (<>
        <br/>
        <div className="productsListing saved-page">
       
        {videosState.videosSaved?.map(item=><div key={item.id} className="cd"> 
           
           <img className="cd-img" onClick={()=> navigate(`/video/${item.id}`)} src={item.thumbnail} alt={item.vName} />
           
          
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
import { isVideoSaved } from "../utils/isVideoSaved"
import { useVideo } from "../contexts/videosContext"

export const SaveButton=({item})=>{
        const {videosState,videosDispatch}=useVideo()

    return  <div style={{cursor:"pointer",color:"red"}}>
                    {isVideoSaved(videosState,item?.id) 
                    ? <i onClick={()=>videosDispatch({type:"REMOVE-FROM-SAVED-VIDEOS",payLoad:{video:item}})} className="fas fa-bookmark icon-sm"></i> 
                    : <i onClick={()=>videosDispatch({type:"ADD-TO-SAVED-VIDEOS",payLoad:{video:item}})} className="far fa-bookmark icon-sm"></i>}
                </div>
    
     
}
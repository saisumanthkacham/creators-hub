import { isVideoSaved } from "../../utils/isVideoSaved"
import { useVideo } from "../../contexts/videosContext"
import {useAuth} from "../../contexts/authContext"
import { useNavigate } from "react-router"

export const SaveButton=({item})=>{
    
    // hook
    const {videosState,videosDispatch}=useVideo()
    const {login}= useAuth()
    const navigate=useNavigate()

    // custom functions
    const activeSaveButtonHandler=()=>{
        videosDispatch({type:"REMOVE-FROM-SAVED-VIDEOS",payLoad:{video:item}})
    }
    const nonActiveSaveButtonHandler=()=>{
       login? videosDispatch({type:"ADD-TO-SAVED-VIDEOS",payLoad:{video:item}}):navigate("/login")
    }

    return  <div style={{cursor:"pointer",color:"#bd0517"}}>
                    {isVideoSaved(videosState,item?.id) 
                    ? <i onClick={activeSaveButtonHandler} className="fas fa-bookmark icon-sm"></i> 
                    : <i onClick={nonActiveSaveButtonHandler} className="far fa-bookmark icon-sm"></i>}
            </div>
    
     
}
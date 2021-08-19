import { isVideoSaved } from "../../utils/isVideoSaved"
import { useVideo } from "../../contexts/videosContext"
import {useAuth} from "../../contexts/authContext"
import { useNavigate } from "react-router"
import { addVideoToSavedVidsOnServerFn,removeVideoFromSavedVidsOnServerFn } from "../../apiCalls"


export const SaveButton=({item})=>{
    
    // hook
    const {videosState,videosDispatch}=useVideo()
    const {login,authState:{userId}}= useAuth()
    const navigate=useNavigate()


    // custom functions
    const activeSaveButtonHandler=async()=>{
        await removeVideoFromSavedVidsOnServerFn(item,userId)
        videosDispatch({type:"REMOVE-FROM-SAVED-VIDEOS",payLoad:{video:item}})
    }
    const nonActiveSaveButtonHandler=()=>{
       login
            ? (async()=>{
                    await addVideoToSavedVidsOnServerFn(item,userId)
                    videosDispatch({type:"ADD-TO-SAVED-VIDEOS",payLoad:{video:item}})
                   })()         
            : navigate("/login")
    }

    return  <div style={{cursor:"pointer",color:"#bd0517"}}>
                    {isVideoSaved(videosState,item?._id) 
                    ? <i onClick={activeSaveButtonHandler} className="fas fa-bookmark icon-sm"></i> 
                    : <i onClick={nonActiveSaveButtonHandler} className="far fa-bookmark icon-sm"></i>}
            </div>
    
     
}
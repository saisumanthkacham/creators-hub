import { useVideo } from "../contexts/videosContext"
import {useState} from "react"


export const AddToPlayListButton=(item)=>{
    const {videosState}=useVideo()
    const [display,setDisplay]=useState(false)

return <>
    <i onClick={()=>setDisplay(!display)} className="fas fa-cannabis"></i>
    
    {/* videosDispatch({type:"ADD-TO-PLAYLIST",payLoad:{video:item}}) */}

    <div className="playList-modal" style={{display:display?"flex":"none"}} >

        <i onClick={()=>setDisplay(false)} className="fas fa-times cd-wrong"></i>
        <h2>playlists</h2>
        <div className="playList-modal-text" style={{justifyContent:"flex-start"}}>
            {videosState.videosPlayList.map((item,idx)=>
                <div key={idx}><input type="checkBox" /><label> {item.name}</label><br/></div>
             )}
        </div>
    </div>
   
    </>
}
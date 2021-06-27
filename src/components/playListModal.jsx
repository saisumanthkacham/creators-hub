import { useVideo } from "../contexts/videosContext"
import { useState } from "react"

export const PlayListModal=({display,setDisplay})=>{
    const {videosState}=useVideo()
    const[playList,setPlayList]=useState(false)


return <div className="playList-modal" style={{visibility:display?"visible":"hidden"}} >

             <i onClick={()=>setDisplay(false)} className="fas fa-times cd-wrong"></i>
            <h2>playlists</h2>
            <div className="playList-modal-text">
                {videosState.videosPlayList.map((item,idx)=>
                <div key={idx}><input type="checkBox" /><label> {item.name}</label><br/></div>
                )}<br/>
                {!playList&&<div className="btn btn-lg" onClick={()=>{setPlayList(true)}}>+ new playList</div>}
               {playList && <input style={{borderRadius:4,border:"none"}} type="text" placeholder="playlist name"/>}
                <br/>
            </div>
        </div>  
}
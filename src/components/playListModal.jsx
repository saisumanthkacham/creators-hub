import { useVideo } from "../contexts/videosContext"
import { useState } from "react"
import { isVideoExistInPlayList } from "../utils/isVideoExistInPlayList"
import { isPlayListAlreadyExist } from "../utils/isPlayListAlreadyExist"

export const PlayListModal=({display,setDisplay,video})=>{

    const {videosState,videosDispatch}=useVideo()
    const[input,setInput]=useState("")


return <div className="playList-modal" style={{visibility:display?"visible":"hidden"}} >

             <i onClick={()=>setDisplay(false)} className="fas fa-times cd-wrong"></i>
             
            <h2>playlists</h2>
            <div className="playList-modal-text">
               <div className="overFlow-text">video:selected</div><br/>
                {videosState.videosPlayList.map((item,idx)=>
                <div key={idx}><input type="checkBox"
                    onChange={()=>{
                        !isVideoExistInPlayList(videosState,item.name,video)&& videosDispatch({type:"ADD-TO-PLAYLIST",payLoad:{video:video,name:item.name}})
                            console.log(videosState.videosPlayList)
                            }} />
                <label> {item.name}</label><br/></div>
                )}<br/>

                <div className="center">
                    <input onChange={(e)=>setInput(e.target.value)} className="input-box" type="text" placeholder="enter new playlist name"/>
                    <div className="btn btn-md" 
                        onClick={()=>{
                        !isPlayListAlreadyExist(videosState,input)&&(input!=="") &&videosDispatch({type:"CREATE-NEW-PLAYLIST",payLoad:{playList:input,video:video}})
                                }}>create&add
                    </div>
                </div>
                <br/>
            </div>
        </div>  
}

import {useVideo} from "../contexts/videosContext.jsx"
import{useNavigate} from "react-router-dom"
import { PlayListCard } from "../components/indexOfComponents"
import { removePlayListOnServerFn } from "../apiCalls.js"
import { useAuth } from "../contexts/authContext.jsx"

export const PlayLists=()=>{

    // hooks
    const{videosState,videosDispatch}=useVideo()
    const navigate= useNavigate()
    const {authState:{userId}}=useAuth()

    // custom functions
    const removePlayListButton=(item)=>{
        videosDispatch({type:"REMOVE-PLAYLIST",payLoad:{name:item.name}})
        removePlayListOnServerFn(item.name,userId)
    }
    const openPlayListFn=(item)=>{
        navigate(`/playLists/${item.name}`)
    }


    return (<>
    <br/>
    <h1>playListPage</h1>
    
    <div className="productsListing ">
        {videosState.videosPlayList?.filter(item=>item?.videos?.length>0).map((item,idx)=>
        <PlayListCard item={item} Button={removePlayListButton} function1={openPlayListFn} idx={idx}/>)}

    </div>
    
    </>)
}
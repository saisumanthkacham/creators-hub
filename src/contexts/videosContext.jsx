import { createContext, useContext, useReducer } from "react";
import { videosData } from "../data";
import { videoReducerFn } from "./reducerFunctions/videoReducerFn";

const VideoContext=createContext()

    export const VideoProvider=({children})=>{
    const intialState={
        userName:"",
        videosSaved:[],
        videosLiked:[],
        videosDisLiked:[],
        videosHistory:[],
        // data structure ref for videosPlaylist [{name:"playlist1",videos:[]},{name:"playlist2",videos:[]}, ],
        videosPlayList:[],
        videosData
    
    }
    const [state,dispatch]=useReducer(videoReducerFn,intialState)
    videoReducerFn(state,dispatch);

return <VideoContext.Provider 
        value={{videosState:state,videosDispatch:dispatch}}>
        {children}
        </VideoContext.Provider>
}

export const useVideo=()=>useContext(VideoContext)
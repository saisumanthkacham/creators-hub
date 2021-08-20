import { createContext, useContext,useReducer } from "react";
import { statisticsReducerFn } from "./reducerFunctions/videoStatisticsReducerFn";
import { useVideo } from "./videosContext";



const VideoStatisticsContext=createContext()


export const VideoStatisticsProvider=({children})=>{
    const {videosState}=useVideo()

    let initialData={
        // intialising these below variables with similar arrays [{id:Id1,likesCount:0},{id:Id2,likesCount:0},{...},...]
        likes: videosState.videosData.map(item=> {return {id:item.id,count:0}}),
        disLikes: videosState.videosData.map(item=> {return {id:item.id,count:0}}),
        views: videosState.videosData.map(item=> {return {id:item.id,count:0}}),
        saved:[],
    }
  

    const[state,dispatch]=useReducer(statisticsReducerFn,initialData)
    statisticsReducerFn(state,dispatch)

return <VideoStatisticsContext.Provider 
        value={{videoStatisticsState:state,videoStatisticsDispatch:dispatch}}>
        {children}
        </VideoStatisticsContext.Provider>
}

export const useVideoStatistics=()=>useContext(VideoStatisticsContext)
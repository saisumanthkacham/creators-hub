import { createContext, useContext,useReducer } from "react";
import { statisticsReducerFn } from "./reducerFunctions/videoStatisticsReducerFn";
import { videosData } from "../data";


const VideoStatisticsContext=createContext()

export const VideoStatisticsProvider=({children})=>{
  
    let initialData={
        // intialising these below variables with similar arrays [{id:Id1,likesCount:0},{id:Id2,likesCount:0},{...},...]
        likes: videosData.map(item=> {return {id:item._id,count:0}}),
        disLikes: videosData.map(item=> {return {id:item._id,count:0}}),
        views: videosData.map(item=> {return {id:item._id,count:0}}),
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
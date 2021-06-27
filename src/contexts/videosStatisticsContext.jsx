import { createContext, useContext } from "react";
import { statisticsReducerFn } from "./reducerFunctions/videoStatisticsReducerFn";

const VideoStatisticsContext=createContext()

export const VideoStatisticsProvider=({children})=>{

    const statisticsIntialData={
        likes:2,
        disLikes:0,
        views:0,
        saved:0,
    }

    const[state,dispatch]=useVideoStatistics(statisticsReducerFn,statisticsIntialData)
    statisticsReducerFn(state,dispatch)

return <VideoStatisticsContext.Provider 
        value={{videoStatisticsState:state,videoStatisticsDispatch:dispatch}}>
        {children}
        </VideoStatisticsContext.Provider>
}

export const useVideoStatistics=()=>useContext(VideoStatisticsContext)
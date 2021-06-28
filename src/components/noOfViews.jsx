import { useVideoStatistics } from "../contexts/videosStatisticsContext"

export const Views=({item})=>{
    
    const {videoStatisticsState}= useVideoStatistics()
    const views=videoStatisticsState.views?.find(vid=>vid?.id===item?.id)

    return <>
    {views?.count} views  
    </>
}
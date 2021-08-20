import { isVideoExistInHistory } from "../../utils/isVideoExistInHistory"

export const videoReducerFn=(prevState,{type,payLoad})=>{
   
    switch(type){
      
        case "ADD-TO-SAVED-VIDEOS" : 
            return {...prevState,videosSaved:[...prevState.videosSaved,payLoad.video]}

        case "REMOVE-FROM-SAVED-VIDEOS":
            return {...prevState,videosSaved:[...prevState.videosSaved.filter(item=>item._id!==payLoad.video._id)]}

        case "ADD-TO-HISTORY" : 
            return isVideoExistInHistory(prevState,payLoad.video._id)?{...prevState}: {...prevState,videosHistory:[...prevState.videosHistory,payLoad.video]}

        case "REMOVE-FROM-HISTORY":
           return  {...prevState,videosHistory:[...prevState.videosHistory.filter(item=>item._id!==payLoad.video._id)]}

        case "ADD-TO-LIKED-VIDEOS" : 
            return {...prevState,videosLiked:[...prevState.videosLiked,payLoad.video]}
    
        case "REMOVE-FROM-LIKED-VIDEOS":
            return {...prevState,videosLiked:[...prevState.videosLiked.filter(item=>item._id!==payLoad.video._id)]}

        case "ADD-TO-DISLIKED-VIDEOS" : 
            return {...prevState,videosDisLiked:[...prevState.videosDisLiked,payLoad.video]}

        case "REMOVE-FROM-DISLIKED-VIDEOS":
                return {...prevState,videosDisLiked:[...prevState.videosDisLiked.filter(item=>item._id!==payLoad.video._id)]}

        case "ADD-TO-PLAYLIST" : 
                return {...prevState,videosPlayList:prevState.videosPlayList.map(item=>item.name===payLoad.name ?{...item,videos:[...item.videos,payLoad.video]} :{...item})}

        case "REMOVE-FROM-PLAYLIST":
                return {...prevState,videosPlayList:prevState.videosPlayList.map(item=>item.name===payLoad.name ?{...item,videos:item.videos.filter(vid=>vid._id!==payLoad.video._id)}:{...item})}

        case "CREATE-NEW-PLAYLIST" : 
                return {...prevState,videosPlayList:[...prevState.videosPlayList,{name:payLoad.playList,videos:[payLoad.video]}]}

        case "REMOVE-PLAYLIST" : 
                return {...prevState,videosPlayList:prevState.videosPlayList.filter(item=>item.name!==payLoad.name)}
        
        case "SET-USERS-USERNAME":
                return {...prevState,userName:payLoad.name}

        // api-calls
        case "FETCH-VIDEOS-DATA-FROM-SERVER":
            return {...prevState,videosData:[...payLoad.data]}

            
        case "FETCH-INTIAL-USER-DATA-FROM-SERVER":
            console.log("line 50 vreducer state",prevState)
            return {...prevState,videosSaved:[...payLoad.vidsSaved],
                    videosLiked:[...payLoad.vidsLiked],videosDisLiked:[...payLoad.vidsDisLiked],
                    videosHistory:[...payLoad.vidsHistory],videosPlayList:[...payLoad.playLists]}


        case "SET-NEW-USER-ENVIRONMENT-AFTER-SIGNUP":
            return {...prevState,videosSaved:[],videosLiked:[],videosDisLiked:[],videosHistory:[],videosPlayList:[]}


        case "FETCH-LIKED-VIDEOS-FROM-SERVER":
            return {...prevState,videosLiked:[payLoad.vidsLiked]}
            
        default: return {...prevState}


    }

}
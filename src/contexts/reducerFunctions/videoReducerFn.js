

export const videoReducerFn=(prevState,{type,payLoad})=>{
   
    switch(type){
      
        case "ADD-TO-SAVED-VIDEOS" : 
            return {...prevState,videosSaved:[...prevState.videosSaved,payLoad.video]}

        case "REMOVE-FROM-SAVED-VIDEOS":
            return {...prevState,videosSaved:[...prevState.videosSaved.filter(item=>item.id!==payLoad.video.id)]}

        case "ADD-TO-HISTORY" : 
            return {...prevState,videosHistory:[...prevState.videosHistory,payLoad.video]}

        case "REMOVE-FROM-HISTORY":
                return {...prevState,videosHistory:[...prevState.videosHistory.filter(item=>item.id!==payLoad.video.id)]}

        case "ADD-TO-LIKED-VIDEOS" : 
            return {...prevState,videosLiked:[...prevState.videosLiked,payLoad.video]}
    
        case "REMOVE-FROM-LIKED-VIDEOS":
            return {...prevState,videosLiked:[...prevState.videosLiked.filter(item=>item.id!==payLoad.video.id)]}

        case "ADD-TO-DISLIKED-VIDEOS" : 
            return {...prevState,videosDisLiked:[...prevState.videosDisLiked,payLoad.video]}

        case "REMOVE-FROM-DISLIKED-VIDEOS":
                return {...prevState,videosDisLiked:[...prevState.videosDisLiked.filter(item=>item.id!==payLoad.video.id)]}

        default: return {...prevState}


    }

}


export const videoReducerFn=(prevState,{type,payLoad})=>{
   
    switch(type){
      
        case "ADD-TO-SAVED-VIDEOS" : 
            return {...prevState,videosSaved:[...prevState.videosSaved,payLoad.video]}

        case "REMOVE-FROM-SAVED-VIDEOS":
            return {...prevState,videosSaved:[...prevState.videosSaved.filter(item=>item.id!==payLoad.video.id)]}

        case "ADD-TO-HISTORY" : 
            return {...prevState,history:[...prevState.history,payLoad.video]}

        case "REMOVE-FROM-HISTORY":
                return {...prevState,history:[...prevState.history.filter(item=>item.id!==payLoad.video.id)]}

        default: return {...prevState}


    }

}
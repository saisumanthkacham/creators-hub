

export const videoReducerFn=(prevState,{type,payLoad})=>{
   
    switch(type){
      
        case "ADD-TO-SAVED-VIDEOS" : 
            return {...prevState,videosSaved:[...prevState.videosSaved,payLoad.video]}

        case "REMOVE-FROM-SAVED-VIDEOS":
            return {...prevState,videosSaved:[...prevState.videosSaved.filter(item=>item.id!==payLoad.video.id)]}
        default: return {...prevState}


    }

}
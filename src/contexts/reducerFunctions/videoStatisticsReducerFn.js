export const statisticsReducerFn=(prevState,{type,payLoad})=>{

    switch(type){
        case "INCREMENT-LIKE":
            console.log("state and payload",prevState,payLoad)
            return {...prevState,likes:prevState.likes.map(item=>item.id===payLoad.id ?{...item,count:item.count+1} :{...item})}

        case "DECREMENT-LIKE":
            return {...prevState,likes:prevState.likes.map(item=>item.id===payLoad.id ?{...item,count:item.count-1} :{...item})}

        case "INCREMENT-DISLIKE":
            return {...prevState,disLikes:prevState.disLikes.map(item=>item.id===payLoad.id ?{...item,count:item.count+1} :{...item})}
            
        case "DECREMENT-DISLIKE":
            return {...prevState,disLikes:prevState.disLikes.map(item=>item.id===payLoad.id ?{...item,count:item.count-1} :{...item})}

        case "INCREMENT-VIEW":
            return {...prevState,views:prevState.views.map(item=>item.id===payLoad.id ?{...item,count:item.count+1} :{...item})}

        default: return {...prevState}
    }
}
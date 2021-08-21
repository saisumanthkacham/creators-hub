
export const dataReducerFn=(prevState,{type,payLoad})=>{

    switch(type){
        case "DATA-STATE-UPLIFTING": 
            return {...prevState,videosData:[...payLoad.data]}

        default: return {...prevState}
    }
}
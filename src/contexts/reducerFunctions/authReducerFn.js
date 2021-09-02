export const authReducerFn=(prevState,{type,payLoad})=>{

    switch(type){

        case "SAVE-USER-DETAILS":
            return {userName:payLoad.name,userId:payLoad.id}

        default: return {...prevState}
    }
    
}
export const authReducerFn=(prevState,{type,payLoad})=>{

    switch(type){

        case "SIGN-UP-USER":
            return {...prevState,usersCredentials:[...prevState.usersCredentials,payLoad]}

        default: return {...prevState}
    }
    
}
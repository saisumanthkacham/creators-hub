import axios from "axios"
import {toast} from "react-toastify"


 export const  getVideosDataFromServerFn= async(videosDispatch)=>{

    try{
        toast.info("Fetching data from server...",{position:"bottom-right"})
        const {data,status}=await axios({
            method:"get",
            url:`https://creators-hub-backend.sumanth5234.repl.co/videos`
        })

        console.log("data from server line 14",data.videosData)
        status===200
                     ? videosDispatch({type:"FETCH-VIDEOS-DATA-FROM-SERVER",payLoad:{data:data.videosData}})
                     :toast.error("error in fetching data from server",{position:"bottom-right"})
    }
    catch(err){
        console.log("error in fetching videos data from server", {error:err.message})
    }

 }



// signing Up the user
 export const signUpUserInServerFn=async(name,pass,email)=>{

    try{
      toast.info("Signing in... ",{position:"bottom-right"})
      const {data,status}= await axios({
         method:"post",
         url:"https://creators-hub-backend.sumanth5234.repl.co/users/auth/signUp",
         data:{
           name:name,
           pass:pass,
           email:email
         }
      })
      console.log("user signup response ",data)
      status===201
                  ? toast.success("you are signed in ",{position:"bottom-right"})
                  : toast.error("error in signing the user ",{position:"bottom-right"})
      return data._id
    }
    catch(err){
      console.log("error in signing up the user",{error:err})
    }
 }



 export const logInUserInServerFn=async(name,pass)=>{
      try{
         toast.info("Logging in... ",{position:"bottom-right"})
         const {data,status} =await axios({
               method:"post",
               url:"https://creators-hub-backend.sumanth5234.repl.co/users/auth/login",
               data:{
                  name:name,
                  pass:pass
               }
         })
            const id=data._id
            status===200
                        ?toast.success(`Hey ${name},you logged in succesfully :)`,{position:"bottom-right"})
                        :toast.error(`invalid username or password, please try again!!`,{position:"bottom-right"})
            return {status,id}
      }
      catch(err){
         console.log("error in logging in the user",{error:err})
      }
 }

 export const getIntialUserDataFromServerFn=async(userId,videosDispatch)=>{

    try{
      const intialUserData= axios({
         method:"get",
         url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/intialUserData`
      })
      console.log("intial user data",intialUserData)
      videosDispatch({type:"FETCH-INTIAL-USER-DATA",payLoad:intialUserData})
    }
    catch(err){
      console.log("error in fetching intial user data from server",{error:err.message})
    }
      
 }


//  export const fetchLikedVideosDataFromServerFn=async(userId,videosDispatch)=>{
//       try{
//          const {videosLiked,status}= axios({
//             method:"get",
//             url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/videosLiked`
//          })
//          status===200
//                      ?videosDispatch({type:"FETCH-LIKED-VIDEOS",payLoad:{data:videosLiked}})
//                      :toast.error("error in fetching liked videos data",{position:"bottom-right"})
//       }
//       catch(err){
//             console.log("error in fetching liked videos data from server",{error:err.message})
//       }

// }


// export const fetchDisLikedVideosDataFromServerFn=async(userId,videosDispatch)=>{
//    try{
//       const {videosDisLiked,status}= axios({
//          method:"get",
//          url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/videosDisLiked`
//       })
//       status===200
//                   ?videosDispatch({type:"FETCH-DISLIKED-VIDEOS",payLoad:{data:videosDisLiked}})
//                   :toast.error("error in fetching disliked videos data",{position:"bottom-right"})
//    }
//    catch(err){
//          console.log("error in fetching disliked videos data from server",{error:err.message})
//    }

// }


// export const fetchHistoryVideosDataFromServerFn=async(userId,videosDispatch)=>{
//    try{
//       const {videosHistory,status}= axios({
//          method:"get",
//          url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/videosHistory`
//       })
//       status===200
//                   ?videosDispatch({type:"FETCH-HISTORY-VIDEOS",payLoad:{data:videosHistory}})
//                   :toast.error("error in fetching history videos data",{position:"bottom-right"})
//    }
//    catch(err){
//          console.log("error in fetching history videos data from server",{error:err.message})
//    }

// }


// export const fetchPlayListNamesFromServerFn=async(userId,videosDispatch)=>{
//    try{
//       const {playListsNames,status}= axios({
//          method:"get",
//          url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/playLists`
//       })
//       status===200
//                   ?videosDispatch({type:"FETCH-PLAYLISTS-NAMES",payLoad:{names:playListsNames}})
//                   :toast.error("error in fetching playLists names",{position:"bottom-right"})
//    }
//    catch(err){
//          console.log("error in fetching playLists names",{error:err.message})
//    }

// }


// export const fetchPlayListVideosFromServerFn=async(userId,playListName,videosDispatch)=>{
//    try{
//       const {videos,status}= axios({
//          method:"get",
//          url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/playLists/${playListName}`
//       })
//       status===200
//                   ?videosDispatch({type:"FETCH-PLAYLIST-VIDEOS",payLoad:{playListVideos:videos}})
//                   :toast.error("error in fetching playList videos",{position:"bottom-right"})
//    }
//    catch(err){
//          console.log("error in fetching playList videos from server",{error:err.message})
//    }

// }


// export const fetchSavedVideosDataFromServerFn=async(userId,videosDispatch)=>{
//    try{
//       const {videosSaved,status}= axios({
//          method:"get",
//          url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/videosSaved`
//       })
//       status===200
//                   ?videosDispatch({type:"FETCH-SAVED-VIDEOS",payLoad:{videos:videosSaved}})
//                   :toast.error("error in fetching saved videos",{position:"bottom-right"})
//    }
//    catch(err){
//          console.log("error in fetching saved videos from server",{error:err.message})
//    }

// }


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
                  ? toast.success(`${name} you are signed in :) `,{position:"bottom-right"})
                  : toast.error("error in signing the user ",{position:"bottom-right"})
      return {data,status}
    }
    catch(err){
      console.log("error in signing up the user",{error:err})
      toast.error("error in signing the user ",{position:"bottom-right"})
    }
 }


// logging in the user
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
                        ?toast.success(`${name},you logged in succesfully :)`,{position:"bottom-right"})
                        :toast.error(`invalid username or password, please try again!!`,{position:"bottom-right"})
            return {status,id}
      }
      catch(err){
         console.log("error in logging the user",{error:err})
         toast.error(`error in logging the user!!`,{position:"bottom-right"})
      }
 }



 export const getIntialUserDataFromServerFn=async(userId,videosDispatch)=>{

    try{
      const {data,status}= await axios({
         method:"get",
         url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/intialUserData`
      })
      console.log("intial user data",data,status)
      const {vidsSaved,vidsLiked,vidsHistory,vidsDisLiked,playLists}= data
      videosDispatch({type:"FETCH-INTIAL-USER-DATA-FROM-SERVER",payLoad:{vidsSaved,vidsLiked,vidsHistory,vidsDisLiked,playLists}})
      return 
    }
    catch(err){
      console.log("error in fetching intial user data from server",{error:err.message})
      toast.error("error in fetching intial user data from server",{position:"bottom-right"})
    }
      
 }


//  export const fetchLikedVideosDataFromServerFn=async(userId,videosDispatch)=>{
//       try{
//          const {vidsLiked,status}= axios({
//             method:"get",
//             url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/videosLiked`
//          })
//          status===200
//                      ?videosDispatch({type:"FETCH-LIKED-VIDEOS-FROM-SERVER",payLoad:{vidsLiked}})
//                      :toast.error("error in fetching liked videos data",{position:"bottom-right"})
//          return {status}
//       }
//       catch(err){
//             console.log("error in fetching liked videos data from server",{error:err.message})
//             toast.error("error in fetching liked videos data",{position:"bottom-right"})
//       }

//    }


// export const fetchDisLikedVideosDataFromServerFn=async(userId,videosDispatch)=>{
//    try{
//       const {videosDisLiked,status}= axios({
//          method:"get",
//          url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/videosDisLiked`
//       })
//       status===200
//                   ?videosDispatch({type:"FETCH-DISLIKED-VIDEOS-FROM-SERVER",payLoad:{data:videosDisLiked}})
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
//                   ?videosDispatch({type:"FETCH-HISTORY-VIDEOS-FROM-SERVER",payLoad:{data:videosHistory}})
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
//                   ?videosDispatch({type:"FETCH-PLAYLISTS-NAMES-FROM-SERVER",payLoad:{names:playListsNames}})
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
//                   ?videosDispatch({type:"FETCH-PLAYLIST-VIDEOS-FROM-SERVER",payLoad:{playListVideos:videos}})
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
//                   ?videosDispatch({type:"FETCH-SAVED-VIDEOS-FROM-SERVER",payLoad:{videos:videosSaved}})
//                   :toast.error("error in fetching saved videos",{position:"bottom-right"})
//    }
//    catch(err){
//          console.log("error in fetching saved videos from server",{error:err.message})
//    }

// }



// add and remove video from saved videos 
export const addVideoToSavedVidsOnServerFn=async(item,userId)=>{
      try{
         toast.info("saving video...",{position:"bottom-right",autoClose:2000})
         const {data,status}= await axios({
            method:"post",
            url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/videosSaved`,
            data:{
               id:item._id,
            }
         })
            console.log("saved video",data)
            status
               ?toast.success("saved video :)",{position:"bottom-right",autoClose:3000})
               :toast.error("error in saving video :(",{position:"bottom-right"})
         return
      }
      catch(err){
         console.log("error in saving video :(")
         toast.error("error in saving video :(",{position:"bottom-right"})
      }  
}


export const removeVideoFromSavedVidsOnServerFn= async(item,userId)=>{
   try{
      toast.info("removing video...",{position:"bottom-right",autoClose:2000})
      const {data,status}= await axios({
         method:"delete",
         url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/videosSaved`,
         data:{
            id:item._id,
         }
      })
         console.log("removed video",data)
         status
            ?toast.success("removed video :)",{position:"bottom-right",autoClose:3000})
            :toast.error("error in removing video from saved videos :(",{position:"bottom-right"})
      return
   }
   catch(err){
      console.log("error in removing video from saved videos :(")
      toast.error("error in removing video from saved videos :(",{position:"bottom-right"})
   }  
}

// add and remove from history
export const addVideoToHistoryVidsOnServerFn=async(item,userId)=>{
   try{
      await axios({
         method:"post",
         url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/videosHistory`,
         data:{
            id:item._id,
         }
      })
      return
   }
   catch(err){
      console.log("error in adding video to history :(")
   }  
}


export const removeVideoFromHistoryVidsOnServerFn= async(item,userId)=>{
   try{
      await axios({
         method:"delete",
         url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/videosHistory`,
         data:{
            id:item._id,
         }
      })
   return
   }
   catch(err){
   console.log("error in removing video from history :(")
   }  
}
import axios from "axios"
import {toast} from "react-toastify"


 export const  getVideosDataFromServerFn= async(videosDispatch)=>{
         
    try{
        toast.info("Fetching data from server...",{position:"bottom-right",autoClose:8000})
        const {data,status}=await axios({
            method:"get",
            url:`https://creators-hub-backend.sumanth5234.repl.co/videos`
        })
        status===200
                     ? videosDispatch({type:"FETCH-VIDEOS-DATA-FROM-SERVER",payLoad:{data:data.videosData}})
                     :toast.error("error in fetching data from server",{position:"bottom-right"})
         return data
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
      const {data}= await axios({
         method:"get",
         url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/intialUserData`
      })
      const {vidsSaved,vidsLiked,vidsHistory,vidsDisLiked,playLists}= data
      videosDispatch({type:"FETCH-INTIAL-USER-DATA-FROM-SERVER",payLoad:{vidsSaved,vidsLiked,vidsHistory,vidsDisLiked,playLists}})
      return 
    }
    catch(err){
      console.log("error in fetching intial user data from server",{error:err.message})
      toast.error("error in fetching intial user data from server",{position:"bottom-right"})
    }
      
 }


// add and remove video from saved videos 
export const addVideoToSavedVidsOnServerFn=async(item,userId)=>{
      try{
         toast.info("saving video...",{position:"bottom-right",autoClose:2000})
         const {status}= await axios({
            method:"post",
            url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/videosSaved`,
            data:{
               id:item._id,
            }
         })
            status===201
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
      const {status}= await axios({
         method:"delete",
         url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/videosSaved`,
         data:{
            id:item._id,
         }
      })
         status===201
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


// add and remove video to liked videos

export const addVideoToLikedVidsOnServerFn=async(item,userId)=>{
   try{
      toast.info("like processing...",{position:"bottom-right",autoClose:2000})
      const {status}= await axios({
         method:"post",
         url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/videosLiked`,
         data:{
            id:item._id,
         }
      })
         status===201
            ?toast.success("video liked :)",{position:"bottom-right",autoClose:3000})
            :toast.error("error in adding like to video :(",{position:"bottom-right"})
      return
   }
   catch(err){
      console.log("error in adding like to video :(")
      toast.error("error in adding like to video :(",{position:"bottom-right"})
   }  
}


export const removeVideoFromLikedVidsOnServerFn= async(item,userId)=>{
      try{
            const {status}= await axios({
            method:"delete",
            url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/videosLiked`,
            data:{
               id:item._id,
            }
         })
            status===201
                  ?toast.success("removed like :)",{position:"bottom-right",autoClose:3000})
                  :toast.error("error in removing like :(",{position:"bottom-right"})
         return
         }

         catch(err){
               console.log("error in removing like :(")
               toast.error("error in removing like :(",{position:"bottom-right"})
            }  
}


// add and remove video to disliked videos

export const addVideoToDisLikedVidsOnServerFn=async(item,userId)=>{
   try{
      toast.info("adding dislike...",{position:"bottom-right",autoClose:2000})
      const {status}= await axios({
         method:"post",
         url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/videosDisLiked`,
         data:{
            id:item._id,
         }
      })
         status===201
            ?toast.success("video disliked :)",{position:"bottom-right",autoClose:3000})
            :toast.error("error in adding video to videosDisLiked :(",{position:"bottom-right"})
      return
   }
   catch(err){
      console.log("error in adding video to videosDisLiked :(")
      toast.error("error in adding video to videosDisLiked :(",{position:"bottom-right"})
   }  
}


export const removeVideoFromDisLikedVidsOnServerFn= async(item,userId)=>{
      try{
            const {status}= await axios({
            method:"delete",
            url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/videosDisLiked`,
            data:{
               id:item._id,
            }
         })
            status===500
                  &&toast.error("error in removing video from disLikedVideos :(",{position:"bottom-right"})
         return
         }

         catch(err){
               console.log("error in removing video from disLikedVideos :(")
               toast.error("error in removing video from disLikedVideos :(",{position:"bottom-right"})
            }  
}


// creating new playlist on server
export const createNewPlayListOnServerFn=async(item,name,userId)=>{

      try{
           const {status}= await axios({
               method:"post",
               url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/playLists`,
               data:{
                  playListName:name,
                  id:item._id
               }
            })
            status===201
                        ?toast.success(`${name} playList created :)`,{position:"bottom-right",autoClose:3000})
                        :toast.error("error in creating new playList",{position:"bottom-right"})
            return
      }
      catch(err){
         console.log("error in creating new playList :(")
         toast.error("error in creating new playList :(",{position:"bottom-right"})
   }

}

export const removePlayListOnServerFn=async(name,userId)=>{

      try{
            toast.info("removing playlist...",{position:"bottom-right",autoClose:2000})
            const{status}=await axios({
               method:"delete",
               url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/playLists`,
               data:{
                  playListName:name
               }
            })
            status===201
                        ?toast.success(`video removed from playList-${name} :)`,{position:"bottom-right",autoClose:3000})
                        :toast.error("error in removing video from playList",{position:"bottom-right"})
            return
      }
      catch(err){
         console.log("error in removing video from playList :(")
         toast.error("rror in removing video from playList :(",{position:"bottom-right"})
      }

}



// adding video to playlist on server
export const addingVideoToPlayListOnServerFn=async(name,id,userId)=>{

      try{
            const{status}=await axios({
               method:"post",
               url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/playLists/${name}`,
               data:{
                  id:id
               }
            })
            status===201
                        ?toast.success(`video added to playList-${name} :)`,{position:"bottom-right",autoClose:3000})
                        :toast.error("error in adding video to playList",{position:"bottom-right"})
            return
      }
      catch(err){
         console.log("error in adding video to playList")
         toast.error("error in adding video to playList",{position:"bottom-right"})
      }

}


export const removeVideoFromPlayListOnServerFn=async(name,id,userId)=>{
      try{
            toast.info("removing video...",{position:"bottom-right",autoClose:2000})
            const{status}=await axios({
               method:"delete",
               url:`https://creators-hub-backend.sumanth5234.repl.co/users/${userId}/playLists/${name}`,
               data:{
                  id:id
               }
            })
            status===201
                        ?toast.success(`video removed from playList-${name} :)`,{position:"bottom-right",autoClose:3000})
                        :toast.error("error in removing video from playList",{position:"bottom-right"})
            return
      }
      catch(err){
         console.log("error in removing video from playList :(")
         toast.error("rror in removing video from playList :(",{position:"bottom-right"})
      }

}



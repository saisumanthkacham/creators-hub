
// import ReactPlayer from "react-player/youtube"
import { useVideo } from "../contexts/videosContext.jsx"
import { useNavigate} from "react-router"
import { useVideoStatistics } from "../contexts/videosStatisticsContext.jsx"
import { SaveButton,VideoCardHome } from "../components/indexOfComponents"
import { useAuth } from "../contexts/authContext.jsx"



export const Explore=()=>{

// hooks
const {videosState,videosDispatch}=useVideo()
const {videoStatisticsDispatch}=useVideoStatistics()
const {login}=useAuth()
const navigate=useNavigate()

// custom functions
const videoHandler=(item)=>{
    videosDispatch({type:"ADD-TO-HISTORY",payLoad:{video:item}});
    videoStatisticsDispatch({type:"INCREMENT-VIEW",payLoad:{id:item.id}})
    navigate(`/video/${item.id}`)
}

const channelFilterHandler=(item)=>{
    navigate(`/channel/${item.creator}`)
}
const youtubeData=videosState.videosData.filter(item=>item.platform==="Youtube")
const instagramData=videosState.videosData.filter(item=>item.platform==="Instagram")
const twitterData=videosState.videosData.filter(item=>item.platform==="Twitter")
const likedData=videosState.videosLiked
const savedData=videosState.videosSaved
const historyData=videosState.videosHistory


return (<section className="body">
    
    <br/>
    <h1>home page</h1>
    <div className="explore-page main">

    <div>
    <img className="explore-img" src="https://www.varunmayya.com/content/images/2021/05/vm.jpg" alt="" />
    <div className="text-over-explore-img">
        <h1 style={{fontSize:50}}>welcome to Creators-Hub </h1>
        <p style={{fontSize:20}}>watch the latest videos of your 
         favourite creators <br/> from all over the social Media</p><br/>
       <div className="white-font primary-bg btn" onClick={()=>navigate("/home")}>Explore</div>
    </div>
   
    </div>
    
    <h1 className="primary-font" id="instagram">Instagram</h1><hr/>
    <div className="productsListingExplore">
        {instagramData?.map((item)=>
        <VideoCardHome item={item} function1={videoHandler} function2={channelFilterHandler} Button={SaveButton}/> )} 
    </div>
    
    
    <h1 className="primary-font">Youtube</h1>
    <hr/>
    <div className="productsListingExplore">
        {youtubeData?.map((item)=>
        <VideoCardHome item={item} function1={videoHandler} function2={channelFilterHandler} Button={SaveButton}/> )} 
    </div>

    <h1 className="primary-font">Twitter</h1><hr/>
    <div className="productsListingExplore ">
        {twitterData?.map((item)=>
        <VideoCardHome item={item} function1={videoHandler} function2={channelFilterHandler} Button={SaveButton}/> )} 
    </div>

    {(login&&historyData.length)
    
            ?<><h1 className="primary-font">History</h1><hr/>
                <div className="productsListingExplore">
                    {historyData?.map((item)=>
                    <VideoCardHome item={item} function1={videoHandler} function2={channelFilterHandler} Button={SaveButton}/> )} 
                </div>

                <h1 className="primary-font">Saved</h1><hr/>
                <div className="productsListingExplore">
                    {savedData?.map((item)=>
                    <VideoCardHome item={item} function1={videoHandler} function2={channelFilterHandler} Button={SaveButton}/> )} 
                </div>

                <h1 className="primary-font">Liked</h1><hr/>
                <div className="productsListingExplore">
                    {likedData?.map((item)=>
                    <VideoCardHome item={item} function1={videoHandler} function2={channelFilterHandler} Button={SaveButton}/> )} 
                </div>
              </>
              
            : " "
    }

    </div>

    
 
    </section>)
}
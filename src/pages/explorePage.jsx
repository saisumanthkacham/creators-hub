
// import ReactPlayer from "react-player/youtube"
import { useVideo } from "../contexts/videosContext.jsx"
import { useNavigate} from "react-router"
import { useVideoStatistics } from "../contexts/videosStatisticsContext.jsx"
import { SaveButton,VideoCardHome } from "../components/indexOfComponents"
import { useAuth } from "../contexts/authContext.jsx"
import home from "../images/home.jpg"


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



// data filtering
const platforms= [...new Set(videosState.videosData.map(item=>item.platform))]

const liked=videosState.videosLiked
const saved=videosState.videosSaved
const history=videosState.videosHistory
const userData=[liked,saved,history]
const userDataStrings=["Liked videos","Saved videos","History videos"]
 
return (<section className="body">
    
    <br/>
    <h1>home page</h1>
    <div className="explore-page main">

        <>
            <img className="explore-img" src={home} alt="homepage-img" />
            <div className="text-over-explore-img">
                <h1 style={{fontSize:50}}>welcome to Creators-Hub </h1>
                <p style={{fontSize:20}}>watch the latest videos of your 
                favourite creators <br/> from all over the social Media</p><br/>
            <div className="white-font primary-bg btn" onClick={()=>navigate("/home")}>Explore</div>
            </div>
        </>


        {platforms?.map((category,idx)=>
                            <>
                                <h1 className="primary-font" id={idx}>{category}</h1><hr/>
                                <div className="productsListingExplore">
                                    {videosState?.videosData?.filter(item=>item.platform===category).map(item=>
                                        <VideoCardHome item={item} function1={videoHandler} function2={channelFilterHandler} Button={SaveButton}/> )} 
                                </div>
                            </>)}

        {(login&&history.length)
    
                                ?<>
                                    {userData?.map((category,idx)=>
                                     <>
                                        <h1 className="primary-font">{userDataStrings[idx]}</h1><hr/>
                                        <div key={idx} className="productsListingExplore">
                                            {category?.map((item)=>
                                            <VideoCardHome item={item} function1={videoHandler} function2={channelFilterHandler} Button={SaveButton}/> )} 
                                        </div>
                                     </>)}

                                </>
              
                                : " "
                            }

        </div>

    </section>)
}

// {userData.map(category=><>
//     <h1 className="primary-font">{category}</h1><hr/>
// <div className="productsListingExplore">
// {category?.map((item)=>
// <VideoCardHome item={item} function1={videoHandler} function2={channelFilterHandler} Button={SaveButton}/> )} 
// </div>
// </>)}


/* <h1 className="primary-font">History</h1><hr/>
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
                </div> */
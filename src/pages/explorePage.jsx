
import { useVideo } from "../contexts/videosContext.jsx"
import { useNavigate} from "react-router"
import { useVideoStatistics } from "../contexts/videosStatisticsContext.jsx"
import { SaveButton,VideoCardHome } from "../components/indexOfComponents"
import { useAuth } from "../contexts/authContext.jsx"
import { addVideoToHistoryVidsOnServerFn } from "../apiCalls.js"
import home from "../images/home.jpg"



export const Explore=()=>{

// hooks
const {videosState,videosDispatch}=useVideo()
const {videoStatisticsDispatch}=useVideoStatistics()
const {login,authState:{userId}}=useAuth()
const navigate=useNavigate()

// custom functions
const videoHandler=async(item)=>{
    navigate(`/video/${item._id}`)
    await addVideoToHistoryVidsOnServerFn(item,userId)
    videosDispatch({type:"ADD-TO-HISTORY",payLoad:{video:item}});
    videoStatisticsDispatch({type:"INCREMENT-VIEW",payLoad:{id:item._id}})
}
const channelFilterHandler=(item)=>{
    navigate(`/channel/${item.creator}`)
}

              

// data filtering
const platforms= [...new Set(videosState.videosData.map(item=>item.platform))]
const liked=videosState.videosLiked
const saved=videosState.videosSaved
const history=videosState.videosHistory.reverse()
const userData=[liked,saved,history]
const userDataHeadings=["Liked videos","Saved videos","History videos"]

 
return (<section className="body">
    
    <br/>
    <h1>home page</h1>
    <div className="explore-page main">


        <>
            <img className="explore-img" src={home} alt="homepage-img" />
            <div className="text-over-explore-img">
                <h1 style={{fontSize:50}}>Welcome to Creators-Hub </h1>
                <p style={{fontSize:20}}>Watch the latest videos of famous 
                creators <br/> from all over the Social Media.</p><br/>
            <div className="white-font primary-bg btn" onClick={()=>navigate("/home")}>Explore</div>
            </div>
        </>

       
        {platforms?.map((category,idx)=>
                            <div key={idx}>
                                <h1 className="primary-font">{category}</h1><hr/>
                                <div className="productsListingExplore" >
                                    {videosState?.videosData?.filter(item=>item.platform===category).map((item)=>
                                        <VideoCardHome item={item} function1={videoHandler} function2={channelFilterHandler} Button={SaveButton} key={item._id} />
                                         )} 
                                </div>
                            </div>)
        }

        {(login&&history.length)
    
                                ?<>
                                    {userData?.map((category,idx)=>
                                     <div key={idx}>
                                        <h1 className="primary-font">{userDataHeadings[idx]}</h1><hr/>
                                        <div key={idx} className="productsListingExplore">
                                            {category?.map((item)=>
                                                <VideoCardHome item={item} function1={videoHandler} function2={channelFilterHandler} Button={SaveButton}/>
                                             )} 
                                        </div>
                                     </div>)
                                    }

                                </>
              
                                : " "
        }

    </div>
       

    </section>)
}
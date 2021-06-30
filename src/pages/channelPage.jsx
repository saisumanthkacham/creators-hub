

import { useVideo } from "../contexts/videosContext.jsx"
import { useNavigate,useParams } from "react-router"
import { useVideoStatistics } from "../contexts/videosStatisticsContext.jsx"
import { SaveButton } from "../components/saveButton.jsx"

export const Channel=()=>{

const {videosState,videosDispatch}=useVideo()
const {videoStatisticsDispatch}=useVideoStatistics()
const navigate=useNavigate()

const {name}=useParams()
const filteredData= videosState.videosData.filter(item=>item.creator===name)



return (<section className="body">
    <br/><h1>home page</h1>
    
    <div className="aside">
 
  

    </div>
    {console.log({filteredData})}
    <div className="productsListing main">
        {filteredData?.map(item=><div key={item.id} className="cd"> 
           
            <img className="cd-img" onClick={()=>{
                    videosDispatch({type:"ADD-TO-HISTORY",payLoad:{video:item}});
                    videoStatisticsDispatch({type:"INCREMENT-VIEW",payLoad:{id:item.id}})
                    navigate(`/video/${item.id}`)
                }} 
             src={item.thumbnail} alt={item.vName} />

            <div className="cd-text">
                <img className="cd-profile" src={item.profileUrl} alt={item.creator}/>
                <div className="cd-overflow-text">{item.vName}</div>
                <SaveButton item={item}/>

                
            </div>
            <div>
            <small className="grey-font cd-creator">{item.creator}</small>
            </div>
            

        </div> )}

        
    </div>

   
    
    </section>)
}
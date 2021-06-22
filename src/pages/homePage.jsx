
// import ReactPlayer from "react-player/youtube"
import { useVideo } from "../contexts/videosContext.jsx"
import { isVideoSaved } from "../utils/isVideoSaved.js"

export const Home=()=>{

const {videosState,videosDispatch}=useVideo()





return (<section className="body">
    <br/><h1>this element is used to create a space on view</h1>
    
    <div className="aside">
 
  

    </div>

    <div className="productsListing main">
        {videosState.videosData.map(item=><div key={item.id} className="cd"> 
           
            <img className="cd-img" onClick={()=>console.log(item.id)} src={item.thumbnail} alt={item.vName} />
            
           
            <div className="cd-text">
                <img className="cd-profile" src={item.profileUrl} alt={item.creator}/>
                <div className="cd-overflow-text">{item.vName}</div>
                <div style={{cursor:"pointer",color:"red"}}>
                    {isVideoSaved(videosState,item.id) 
                    ? <i onClick={()=>videosDispatch({type:"REMOVE-FROM-SAVED-VIDEOS",payLoad:{video:item}})} className="fas fa-bookmark"></i> 
                    : <i onClick={()=>videosDispatch({type:"ADD-TO-SAVED-VIDEOS",payLoad:{video:item}})} className="far fa-bookmark"></i>}
                </div>
            </div>

            <div>
            <small className="grey-font cd-creator">{item.creator}</small>
            </div>

            

        </div> )}

        
    </div>

   
    
    </section>)
}
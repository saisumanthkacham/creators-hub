
// import ReactPlayer from "react-player/youtube"
import {videosData} from "../data.js"
export const Home=()=>{

    return (<section className="body">
    <br/><h1>iou</h1>
    
    <div className="aside">
 


    </div>
    <div className="productsListing main">
        {videosData.map(item=><div className="cd"> 
           
            <img className="cd-img" src={item.thumbnail} alt={item.vName} />
            
           
            <div className="cd-text">
                <img className="cd-profile" src={item.profileUrl} alt={item.creator}/>
                <p className="cd-overflow-text">{item.vName}</p>
                <div><i class="fas fa-ellipsis-v"></i></div>
            </div>
            <small className="grey-font cd-creator">creator-{item.creator}</small>
            
        </div> )}
    </div>
    
    </section>)
}
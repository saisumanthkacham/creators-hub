import { useVideo } from "../contexts/videosContext"


export const Saved=()=>{
    const {videosState}=useVideo()

    console.log(videosState.videosSaved)

    return (<>
        

        {videosState.videosSaved.map(item=><div key={item.id} className="cd"> 
           
           <img className="cd-img" onClick={()=>console.log(item.id)} src={item.thumbnail} alt={item.vName} />
           
          
           <div className="cd-text">
               <img className="cd-profile" src={item.profileUrl} alt={item.creator}/>
               <div className="cd-overflow-text">{item.vName}</div>
              
           </div>

           <div>
           <small className="grey-font cd-creator">{item.creator}</small>
           </div>

           

       </div> )}
    
    
    </>)
}
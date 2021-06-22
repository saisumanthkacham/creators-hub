import { useVideo } from "../contexts/videosContext"


export const Saved=()=>{
    const {videosState,videosDispatch}=useVideo()

    

    return (<>
        <br/>
        <div className="productsListing saved-page">

        {videosState.videosSaved.map(item=><div key={item.id} className="cd"> 
           
           <img className="cd-img" onClick={()=>console.log(item.id)} src={item.thumbnail} alt={item.vName} />
           
          
           <div className="cd-text">
               <img className="cd-profile" src={item.profileUrl} alt={item.creator}/>
               <div className="cd-overflow-text">{item.vName}</div>
               <div style={{cursor:"pointer"}}>
               <i onClick={()=>videosDispatch({type:"REMOVE-FROM-SAVED-VIDEOS",payLoad:{video:item}})} class="fas fa-times cd-wrong"></i>
                </div>
           </div>

           <div>
           <small className="grey-font cd-creator">{item.creator}</small>
           </div>

           

       </div> )}
    
       </div>
    </>)
}
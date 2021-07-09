

export const VideoCardPlayList=({item,function1,Button})=>{


    return <div key={item.id} className="cd"> 
          
    <img className="cd-img" onClick={()=>function1(item)} src={item.thumbnail} alt={item.vName} />
    
   
    <div className="cd-text">
        <img className="cd-profile" src={item.profileUrl} alt={item.creator}/>
        <div className="cd-overflow-text">{item.vName}</div>
        <i style={{cursor:"pointer"}} onClick={()=>Button(item)} className="fas fa-times saved-cd-wrong "></i>
    </div>

    <div>
    <small className="grey-font cd-creator">{item.creator}</small>
    </div>

 </div>
}
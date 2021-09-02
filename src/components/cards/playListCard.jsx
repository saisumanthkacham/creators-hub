
export const PlayListCard=({item,function1,Button,idx})=>{

    return <div key={idx} style={{height:190}} className="cd">

    <img className="cd-img" src={item.videos[0]?.thumbnail} alt="" />
    <i style={{cursor:"pointer"}} onClick={()=>Button(item)} className="fas fa-trash cd-wrong"></i>
    <div  className="wide-row"> <h4>{item.name}</h4> </div>
    <div  className="playList-img-text ">
        <div style={{color:"white",textDecoration:"none"}} onClick={()=>function1(item) }>view playList ({item.videos.length?item.videos.length:0}) </div>        
    </div>
    <br/>
</div>
}
export const VideoCardHistory=({item,function1,Button})=>{


    return <div key={item.id} className="history-cd">
    <img onClick={()=>function1(item) } className="cd-img" src={item.thumbnail} alt="" />
                        
    <i onClick={()=>Button(item)} className="fas fa-times cd-wrong icon-sm"></i>
    <div className="center-col history-cd-text">
        <div >{item.vName}</div>
        <small>{item.creator}</small>    
    </div>
</div>
}
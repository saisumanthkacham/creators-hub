export const SimilarVideosCard=({item,function1})=>{


    return <div key={item._id} className="similar-videos-cd">
    <img onClick={()=>function1(item)} className="cd-img" src={item.thumbnail} alt="" />
    <div className="center-col history-cd-text">
    <div >{item.vName}</div>
    <small>{item.creator}</small>    
    </div>
</div>
}
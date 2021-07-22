export const VideoCardHome= ({item,function1,function2,Button}) =>{

return <div  className="cd" key={item.id}> 
           
    <img className="cd-img" onClick={()=>function1(item)} src={item.thumbnail} alt={item.vName} />

    <div className="cd-text">
        <img className="cd-profile" src={item.profileUrl} alt={item.creator}/>
        <div className="cd-overflow-text">{item.vName}</div>
        <Button item={item}/>
    </div>

    <div> 
        <small 
            className= {function2?" cd-creator red-font":" cd-creator grey-font"} 
            onClick={()=>function2 ?function2(item) :"" }>
            {item.creator}
        </small> 
    </div>

</div>
}
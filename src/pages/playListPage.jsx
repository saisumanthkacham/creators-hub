
import {useVideo} from "../contexts/videosContext.jsx"
import{NavLink} from "react-router-dom"


export const PlayList=()=>{
    const{videosState}=useVideo()

    return (<>
    <br/>
    <h1>playListPage</h1>
    
    <div className="productsListing ">
        {videosState.videosPlayList?.map((item,idx)=><div key={idx} style={{height:190}} className="cd">
    
                <img className="cd-img" src={item.videos[0]} alt="" />
                <div  className="wide-row"> <h4>{item.name}</h4> <i style={{marginLeft:10}} className="fas fa-pen"></i> </div>
                <div  className="playList-img-text ">
                        <NavLink style={{color:"white",textDecoration:"none"}}  to="/">view playList ({item.length?item.length:0}) </NavLink>        
                </div>
                <br/>
        </div>)}

        </div>
    
    </>)
}
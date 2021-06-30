
import {useVideo} from "../contexts/videosContext.jsx"
import{useNavigate} from "react-router-dom"


export const PlayLists=()=>{

    const{videosState}=useVideo()
    const navigate= useNavigate()

    return (<>
    <br/>
    <h1>playListPage</h1>
    
    <div className="productsListing ">
        {videosState.videosPlayList?.map((item,idx)=><div key={idx} style={{height:190}} className="cd">
    
                <img className="cd-img" src={item.videos[0]?.thumbnail} alt="" />
                <div  className="wide-row"> <h4>{item.name}</h4> <i style={{marginLeft:10}} className="fas fa-pen"></i> </div>
                <div  className="playList-img-text ">
                        <div style={{color:"white",textDecoration:"none"}} onClick={()=>navigate(`/playLists/${item.name}`)}>view playList ({item.videos.length?item.videos.length:0}) </div>        
                </div>
                <br/>
        </div>)}

        </div>
    
    </>)
}
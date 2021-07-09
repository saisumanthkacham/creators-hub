
import ReactPlayer from "react-player/youtube"
import {SaveButton,LikeButton,DisLikeButton, AddToPlayListButton,Views} from "./indexOfComponents"



export const Player=({item,display,setDisplay})=>{

    return <div className="player-wrapper">
    
    <ReactPlayer url={item?.url}  controls={true} width="100%" height="100%" />

    {item?.vName} <br/>
    <div className="center" >
        <Views item={item}/>
        <div className="video-bar center">
            <LikeButton item={item} />
            <DisLikeButton item={item} /> &nbsp;
            <AddToPlayListButton display={display} setDisplay={setDisplay} />
            <SaveButton item={item}/>
        </div>
    </div>
    <hr/>
    <div className="center" style={{width:190}}>
        <img className="cd-profile" src={item?.profileUrl} alt={item?.creator}/>
        {item?.creator}
    </div>
</div>
}
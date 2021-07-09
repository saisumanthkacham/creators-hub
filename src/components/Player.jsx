import { DisLikeButton } from "./disLikeButton"
import { LikeButton } from "./likeButton"
import {Views} from "./noOfViews"
import { AddToPlayListButton } from "./addToPlayListButton"
import { SaveButton } from "./saveButton.jsx"
import ReactPlayer from "react-player/youtube"



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
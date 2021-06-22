import { useVideo } from "../contexts/videosContext"
export const History=()=>{

        const{videosState,videosDispatch}=useVideo()

    return (<>
    <br/>
    <h1>historyPage</h1>
    <div className="history-page ">
        {videosState.history.map(item=><div className="history-cd">
            <img className="cd-img" src={item.thumbnail} alt="" />
            <i onClick={()=>videosDispatch({type:"REMOVE-FROM-HISTORY",payLoad:{video:item}})} class="fas fa-times history-cd-wrong"></i>
            <div className="center-col history-cd-text">
                <div >{item.vName}</div>
                <div>
                    {/* <img className="cd-profile" src={item.profileUrl} alt="" /> */}
                    <small>{item.creator}</small>
                </div>
            </div>
        </div>)}
    </div>
    
    </>)
}
import { createContext, useContext, useEffect, useReducer } from "react";
import { videoReducerFn } from "./reducerFunctions/videoReducerFn";
import { getVideosDataFromServerFn } from "../apiCalls.js";

const VideoContext = createContext();


export const VideoProvider = ({ children }) => {
  let intialState = {
    videosSaved: [],
    videosLiked: [],
    videosDisLiked: [],
    videosHistory: [],
    // data structure ref for videosPlaylist [{name:"playlist1",videos:[]},{name:"playlist2",videos:[]}, ],
    videosPlayList: [],
    videosData:[]
  };
  const [state, dispatch] = useReducer(videoReducerFn, intialState);
  videoReducerFn(state, dispatch);

  useEffect(()=>{
    getVideosDataFromServerFn(dispatch)
    
  },[])


  return (
    <VideoContext.Provider
      value={{ videosState: state, videosDispatch: dispatch }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => useContext(VideoContext);

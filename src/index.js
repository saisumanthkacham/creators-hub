import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {VideoProvider} from "./contexts/videosContext"
import { VideoStatisticsProvider } from './contexts/videosStatisticsContext';
import { AuthProvider } from './contexts/authContext';
import {BrowserRouter as Router} from "react-router-dom"
import {ScrollToTop} from "./components/scrollToTop"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
       <ScrollToTop/>
        <VideoStatisticsProvider>
            <VideoProvider>
                <App />
            </VideoProvider>
        </VideoStatisticsProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


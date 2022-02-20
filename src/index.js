import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DemoButton from './components/LandingView/DemoButton'
import LandingPage from './components/LandingView/LandingPage'
import DemoPage from './components/DemoPageView/DemoPage'
import DemoPageBanner from './components/DemoPageView/DemoPageBanner'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  return(
    <Router>
      <DemoPageBanner />
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/demopage" element={<DemoPage/>}/>
      </Routes>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


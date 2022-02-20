import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './components/LandingView/LandingPage'
import Demo from './components/DemoPageView/DemoPage'
import Login from './components/LoginPageView/LoginPage'
import Profile from './components/ProfilePageView/ProfilePage'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/demo" element={<Demo/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/admin" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


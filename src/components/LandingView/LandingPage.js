import DemoButton from './DemoButton'
import LoginButton from './LoginButton';
import '../../css/LandingPage.css'
import React from 'react'
import logo from '../../pngs/paperclip-icon.png'

function LandingPage() {
  return (
    <div>
      <div className='MainContainer'>
        <div className='TextContainer'>
          <img src={logo} className='Icon'></img>
          <h1 className='WebName'>Folio</h1>
          <h3>Online portfolios made easy!</h3>
        </div>
        <div>
        <DemoButton></DemoButton>
        <LoginButton></LoginButton>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;

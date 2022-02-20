
import '../../css/ProfilePage.css'
import React from 'react'
import logo from '../../pngs/paperclip-icon.png'

function ProfilePage() {
  return (
    <div>
      <div className='MainContainer'>
        <div className='TextContainer'>
          <img src={logo} className='Icon'></img>
          <h1 className='WebName'>Folio</h1>
          <h3>Customize your porfolio!</h3>
        </div>
      </div>

    </div>
  );
}

export default ProfilePage;

import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../../css/LandingPage.css'

function LoginButton(){
	return(
		<button className='LoginBtn'>
			<Link to="/login" className='LoginText'>Login</Link>
		</button>
	);
}

export default LoginButton;
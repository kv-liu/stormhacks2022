import React from 'react';
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import '../../css/LandingPage.css'

function DemoButton(){
	return(
		<button className='DemoBtn'>
			<Link to="/demo" className='TryDemoText'>Try Folio Demo!</Link>
		</button>
	);
}

export default DemoButton;
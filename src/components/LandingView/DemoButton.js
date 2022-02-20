import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

function DemoButton(){
	return(
		<button>
			<Link to="/demopage">Try Demo!</Link>
		</button>
	);
}

export default DemoButton;
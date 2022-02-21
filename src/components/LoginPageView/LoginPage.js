import '../../css/LoginPage.css'
import React from 'react';
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import logo from '../../pngs/paperclip-icon.png'
import axios from 'axios'

const baseURL = 'https://xmeze32pfp.sharedwithexpose.com/sanctum/csrf-cookie';


function LoginPage(){

    const [formData, setformData] = React.useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setformData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.get("/api/user")

        const userData = {
            email: formData.email,
            password: formData.password
        };

        console.log(userData)
        axios.post("/login", userData)
        .then((response) => {
            console.log("Made it here");
            console.log(response.status);
        })


    }

	return(
		<div>
            <div className='MainContainer'>
                <div className='TextContainer'>
                    <img src={logo} className='Icon'></img>
                    <h1 className='WebName'>Folio</h1>
                    <h3>Login to your Folio account</h3>
                </div>

                <form className='LoginForm' onSubmit={handleSubmit}>
                    <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email'className='EmailInput'></input>
                    <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Password' className='PassInput'></input>
                    <button type='submit' className='LoginInput'>Log in</button>
                    <p>Forgot Password?</p>
                    <p>Don't have an account? <span>Create one</span></p>
                </form>


            </div>


		</div>
	);
}

export default LoginPage;


// <Link to="/admin">Log in</Link>
import '../../css/LoginPage.css'
import React from 'react';
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import logo from '../../pngs/paperclip-icon.png'
import axios from 'axios'



const url = 'https://xmeze32pfp.sharedwithexpose.com/sanctum/csrf-cookie';

const testURL = 'http://localhost:3000/login/'

function LoginPage(){

    const [formValue, setformValue] = React.useState({
        email: '',
        password: ''
    });

    const handleSubmit = async() => {
        const loginFormData = new FormData();
        loginFormData.append('email', formValue.email)
        loginFormData.append('password', formValue.password)
        console.log(loginFormData)

        try {
            const response = await axios({
                method: 'post',
                url: '',
                data: loginFormData,
            })
        } catch(error) {
            console.log(error)
        }

    }


    const handleChange = (event) => {
        setformValue({
            formValue,
            [event.target.name]: event.target.value
        });
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
                    <input type='email' name='email' value={formValue.email} onChange={handleChange} placeholder='Email'className='EmailInput'></input>
                    <input type='password' name='password' value={formValue.password} onChange={handleChange} placeholder='Password' className='PassInput'></input>
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
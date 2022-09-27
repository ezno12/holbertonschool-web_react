import React from 'react';
import './Login.css'


function Login(){
    return(
        <div className='login-container'>
        <p className='login-p'>Login to access the full dashboard</p>
        <label for="email">Email</label>
            <input type="email" id="email" name="email" required></input>
        <label for="pass">Password</label>
            <input type="password" id="pass" name="password" minlength="8" required></input>
        <input type="button" value="OK" />
        </div>
    )
}

export default Login
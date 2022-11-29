import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login(){
    const styles = StyleSheet.create({
        loginContainer: {
            borderStyle: 'solid none',
            borderColor: '#e1003c',
            minHeight: '50vh'
        },
        loginText: {
            textAlign: 'left' ,
            paddingLeft: '3rem'
        }
    })
    return(
        <div className={css(styles.loginContainer)}>
        <p className={css(styles.loginText)}>Login to access the full dashboard</p>
        <label for="email">Email</label>
            <input type="email" id="email" name="email" required></input>
        <label for="pass">Password</label>
            <input type="password" id="pass" name="password" minlength="8" required></input>
        <button>OK</button>
        </div>
    )
}

export default Login
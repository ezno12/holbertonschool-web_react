import React from 'react';
import logo from "../assets/holberton-logo.jpg"
import { StyleSheet, css } from 'aphrodite';


const Header = () => {
    const styles = StyleSheet.create({
      AppHeader: {
        minHeight: '40vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        justifyContent: 'left',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white'
      },
      AppLogo: {
        height: '40vmin',
        pointerEvents: 'none',
        paddingLeft: '1rem'
      },
      headerTextColor: {
        color: '#e1003c'
      }
    })
    return(
        <header className={css(styles.AppHeader)}>
        <img src={logo} className={css(styles.AppLogo)} alt="logo" />
        <h1 className={css(styles.headerTextColor)}>
        School dashboard
        </h1>
      </header>
    )
        
}


export default Header
import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils'
import { StyleSheet, css } from 'aphrodite';

const Footer = () => {
    const styles = StyleSheet.create({
      footerText: {
        textAlign: 'center'
      }
    })
    return(
        <footer>
        <p className={css(styles.footerText)}>Copyright  {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
        )
}

export default Footer;
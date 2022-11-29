import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const BodySectionWithMarginBottom = (props) => {
    const styles = StyleSheet.create({
        mgbot: {
            marginBottom: 40
        },
        space: {
            width: '100%'
        }
    })
    return (
        <div className={css(styles.mgbot, styles.space)}>
            <BodySection {...props}/>
        </div>
    )
}
BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default BodySectionWithMarginBottom;
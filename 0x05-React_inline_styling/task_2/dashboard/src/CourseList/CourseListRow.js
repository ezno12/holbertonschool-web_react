import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite'

const styles= StyleSheet.create({
    headerRowColor: {
        backgroundColor: '#deb5b545'
    },
    rowColor: {
        backgroundColor: '#f5f5f5a'
    }
})

const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
    if(isHeader) {
        if(textSecondCell === null) {
            return (
                <tr className={css(styles.headerRowColor)}><th colSpan="2">{textFirstCell}</th></tr>
            )
        } else{
            return (
                <tr className={css(styles.headerRowColor)}>
                <th>{textFirstCell}</th>
                <th> {textSecondCell}</th>
                </tr>
            )
        }
    } else {
        return (
            <tr className={css(styles.rowColor)}>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>  
            </tr>
        )
    }
}

CourseListRow.prototype = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

export default CourseListRow;
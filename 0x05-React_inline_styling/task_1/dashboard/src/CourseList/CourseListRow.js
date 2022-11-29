import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
    const rowColor = {backgroundColor: '#f5f5f5ab'}
    const headerRowColor = {backgroundColor: '#deb5b545'}
    if(isHeader) {
        if(textSecondCell === null) {
            return (
                <tr style={headerRowColor}><th colSpan="2">{textFirstCell}</th></tr>
            )
        } else{
            return (
                <tr style={headerRowColor}>
                <th>{textFirstCell}</th>
                <th> {textSecondCell}</th>
                </tr>
            )
        }
    } else {
        return (
            <tr style={rowColor}>
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
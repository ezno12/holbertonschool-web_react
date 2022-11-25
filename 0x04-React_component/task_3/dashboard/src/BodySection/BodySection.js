import React from 'react';
import PropTypes from 'prop-types';

class BodySection extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        const { title, children } = this.props;
        return (
            <div>
                <h2>{title}</h2>
                {children}
            </div>
        )
    }
}

BodySection.defaultProps = {
    title: '',
  };
  
  BodySection.propTypes = {
    title: PropTypes.string,
    hildren: PropTypes.node
  };


export default BodySection;
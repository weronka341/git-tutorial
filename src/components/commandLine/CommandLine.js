import React from 'react';
import PropTypes from 'prop-types';
import './CommandLine.css';

export const CommandLine = (props) => {
    return (
        <div className={'command-line ' + (props.isVisible ? 'visible' : 'hidden')}>
            >
        </div>
    );
};

CommandLine.propTypes = {
    isVisible: PropTypes.bool,
};

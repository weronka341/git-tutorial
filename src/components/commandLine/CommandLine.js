import React from 'react';
import PropTypes from 'prop-types';
import './CommandLine.css';
import {connect} from 'react-redux';

export const CommandLineComponent = (props) => {
    return (
        <div className={'command-line ' + (props.isVisible ? 'visible' : 'hidden')}>
            >
        </div>
    );
};

CommandLineComponent.propTypes = {
    isVisible: PropTypes.bool,
};

const mapStateToProps = (state) => {
    return {
        isVisible: state.visibility.bottomBarVisible
    }
};

export const CommandLine = connect(mapStateToProps)(CommandLineComponent);

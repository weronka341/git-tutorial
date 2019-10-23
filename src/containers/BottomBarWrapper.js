import React from 'react';
import PropTypes from 'prop-types';
import {Segment, Sidebar} from 'semantic-ui-react';
import {CollapsingBar} from '../components/collapsingBar/CollapsingBar';
import {CommandLine} from '../components/commandLine/CommandLine';
import {setVisibility} from '../actions/ActionCreator';
import {actions} from '../actions/Action';
import {connect} from 'react-redux';

export const BottomBar = (props) => {
    return (
        <Sidebar
            as={Segment}
            animation='overlay'
            direction='bottom'
            icon='labeled'
            inverted
            vertical
            visible
            width='thin'
        >
            <CollapsingBar/>
            <CommandLine/>
        </Sidebar>
    );
};

BottomBar.propTypes = {
    isVisible: PropTypes.bool,
    onClick: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        isVisible: state.visibility.bottomBarVisible
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (isVisible) => dispatch(setVisibility(actions.SET_BOTTOMBAR_VISIBILITY, isVisible)),
    }
};

export const BottomBarWrapper = connect(mapStateToProps, mapDispatchToProps)(BottomBar);

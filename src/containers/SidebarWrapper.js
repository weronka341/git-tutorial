import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setVisibility} from '../actions/ActionCreator';
import {actions} from '../actions/Action';
import {Menu, Sidebar} from 'semantic-ui-react';
import {SidebarOptions} from '../components/sidebarOptions/SidebarOptions';

const SidebarWrapperComponent = (props) => {
    return (
        <Sidebar
            as={Menu}
            className={props.isBottomBarVisible ? 'moved-content' : ''}
            animation='overlay'
            direction='right'
            icon='labeled'
            inverted
            onHide={() => props.onHide(false)}
            target={props.toggleSidebarRef}
            vertical
            visible={props.isSidebarVisible}
        >
            <SidebarOptions/>
        </Sidebar>
    );
};

SidebarWrapperComponent.propTypes = {
    isSidebarVisible: PropTypes.bool,
    isBottomBarVisible: PropTypes.bool,
    onHide: PropTypes.func,
    toggleSidebarRef: PropTypes.any
};

const mapStateToProps = (state) => {
    return {
        isSidebarVisible: state.visibility.sidebarVisible,
        isBottomBarVisible: state.visibility.bottomBarVisible,
        toggleSidebarRef: state.visibility.toggleSidebarRef,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHide: (isVisible) => dispatch(setVisibility(actions.SET_SIDEBAR_VISIBILITY, isVisible)),
    }
};

export const SidebarWrapper = connect(mapStateToProps, mapDispatchToProps)(SidebarWrapperComponent);

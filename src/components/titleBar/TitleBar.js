import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Icon, StepTitle, Ref, Container} from 'semantic-ui-react';
import {setVisibility} from '../../actions/ActionCreator';
import {actions} from '../../actions/Action';
import './TitleBar.css';

export const TitleBarComponent = (props) => {
    return (
        <Container fluid id='title-bar'>
            <Icon id='title-icon' name='git'/>
            <StepTitle id='title'>
                tutorial
            </StepTitle>
            {renderToggleSidebarButton(props)}
        </Container>
    );
};

const renderToggleSidebarButton = (props) => {
    return (
        <React.Fragment>
            <Ref innerRef={props.toggleSidebarRef}>
                <Icon className={'toggle-menu-icon' + (props.isVisible ? ' visible' : ' hidden')}
                      name='arrow circle right'
                />
            </Ref>
            {props.isDisabled
                ? <Icon disabled name='arrow circle left'/>
                : <Icon className={'toggle-menu-icon' + (props.isVisible ? ' hidden' : ' visible')}
                        name='arrow circle left'
                        onClick={() => props.onClick(true)}
                />
            }
        </React.Fragment>
    );
};

TitleBarComponent.propTypes = {
    isVisible: PropTypes.bool,
    onClick: PropTypes.func,
    toggleSidebarRef: PropTypes.any,
    isDisabled: PropTypes.bool,
};

const mapStateToProps = (state) => {
    return {
        isVisible: state.visibility.sidebarVisible,
        toggleSidebarRef: state.visibility.toggleSidebarRef,
        isDisabled: state.animations.isExerciseDisplayed,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (isVisible) => dispatch(setVisibility(actions.SET_SIDEBAR_VISIBILITY, isVisible)),
    }
};

export const TitleBar = connect(mapStateToProps, mapDispatchToProps)(TitleBarComponent);

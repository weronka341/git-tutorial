import React from 'react';
import PropTypes from 'prop-types';
import {Icon, Segment, StepTitle, Ref} from 'semantic-ui-react';
import './TitleBar.css';
import {setVisibility} from '../../actions/ActionCreator';
import {actions} from '../../actions/Action';
import {connect} from 'react-redux';

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

export const TitleBarComponent = (props) => {
    return (
        <Segment className='title-bar'>
            <Icon id='title-icon' name='git'/>
            <StepTitle>
                tutorial
            </StepTitle>
            {renderToggleSidebarButton(props)}
        </Segment>
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

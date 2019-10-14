import React from 'react';
import PropTypes from 'prop-types';
import {Icon, Ref, Segment, StepTitle} from 'semantic-ui-react';
import './TitleBar.css';

const renderToggleSidebarButton = (props) => {
    return (
        <React.Fragment>
            <Ref innerRef={props.toggleSidebarRef}>
                <Icon className={'toggle-menu-icon' + (props.isVisible ? ' visible' : ' hidden')}
                      name='tasks'
                />
            </Ref>
            <Icon className={'toggle-menu-icon' + (props.isVisible ? ' hidden' : ' visible')}
                  name='tasks'
                  onClick={() => props.onClick(true)}
            />
        </React.Fragment>
    );
};

export const TitleBar = (props) => {
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

TitleBar.propTypes = {
    isVisible: PropTypes.bool,
    onClick: PropTypes.func,
    toggleSidebarRef: PropTypes.any,
};

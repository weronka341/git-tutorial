import React from 'react';
import PropTypes from 'prop-types';
import {Icon, Segment, Sidebar} from 'semantic-ui-react';

export const BottomBarWrapper = (props) => {
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
            <div>
                <Icon name='home' onClick={() => props.onClick(!props.isVisible)}/>
            </div>
            <Segment className={props.isVisible ? 'visible' : 'hidden'}>
                Tu bedzie konsola
            </Segment>
        </Sidebar>
    );
};

BottomBarWrapper.propTypes = {
    isVisible: PropTypes.bool,
    onClick: PropTypes.func,
};

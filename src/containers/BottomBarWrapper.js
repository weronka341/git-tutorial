import React from 'react';
import PropTypes from 'prop-types';
import {Segment, Sidebar} from 'semantic-ui-react';
import {CollapsingBar} from '../components/collapsingBar/CollapsingBar';
import {CommandLine} from '../components/commandLine/CommandLine';

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
            <CollapsingBar isVisible={props.isVisible} onClick={(isVisible) => props.onClick(isVisible)}/>
            <CommandLine isVisible={props.isVisible}/>
        </Sidebar>
    );
};

BottomBarWrapper.propTypes = {
    isVisible: PropTypes.bool,
    onClick: PropTypes.func,
};

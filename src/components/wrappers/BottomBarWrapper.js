import React from 'react';
import {Segment, Sidebar} from 'semantic-ui-react';
import {CollapsingBar} from '../../containers/collapsingBar/CollapsingBar';
import {CommandLine} from '../../containers/commandLine/CommandLine';

export const BottomBarWrapper = () => {
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

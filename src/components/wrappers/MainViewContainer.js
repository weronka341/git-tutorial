import React from 'react';
import {
    Segment,
    Sidebar,
} from 'semantic-ui-react';
import {SidebarWrapper} from '../../containers/SidebarWrapper';
import {BottomBarWrapper} from './BottomBarWrapper';
import {TitleBar} from '../../containers/titleBar/TitleBar';
import {TutorialContentContainer} from '../../containers/tutorialContentContainer/TutorialContentContainer';

export const MainViewContainer = () => {

    return (
        <React.Fragment>
            <TitleBar/>
            <Sidebar.Pushable as={Segment}>
                <SidebarWrapper/>
                <BottomBarWrapper/>
                <Sidebar.Pusher>
                    <Segment basic>
                        <TutorialContentContainer/>
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </React.Fragment>
    );
};

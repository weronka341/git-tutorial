import React from 'react';
import {
    Segment,
    Sidebar,
} from 'semantic-ui-react';
import {SidebarWrapper} from './SidebarWrapper';
import {BottomBarWrapper} from './BottomBarWrapper';
import {TitleBar} from '../components/titleBar/TitleBar';
import {WelcomePageContainer} from './welcomePage/WelcomePageContainer';


export const MainViewContainer = () => {

    return (
        <React.Fragment>
            <TitleBar/>
            <Sidebar.Pushable as={Segment}>
                <SidebarWrapper/>
                <BottomBarWrapper/>
                <Sidebar.Pusher>
                    <Segment basic>
                        <WelcomePageContainer/>
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </React.Fragment>
    );
};

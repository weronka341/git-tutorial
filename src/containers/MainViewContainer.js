import React, {useState} from 'react';
import {
    Segment,
    Sidebar,
} from 'semantic-ui-react';
import {SidebarWrapper} from './SidebarWrapper';
import {BottomBarWrapper} from './BottomBarWrapper';
import {TitleBar} from '../components/titleBar/TitleBar';

export const MainViewContainer = () => {
    const [bottomBarVisible, setBottomBarVisible] = useState(false);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebarRef = React.useRef();

    return (
        <React.Fragment>
            <TitleBar
                toggleSidebarRef={toggleSidebarRef}
                isVisible={sidebarVisible}
                onClick={(isVisible) => setSidebarVisible(isVisible)}
            />
            <Sidebar.Pushable as={Segment}>
                <SidebarWrapper toggleSidebarRef={toggleSidebarRef}
                                isVisible={sidebarVisible}
                                onHide={(isVisible) => setSidebarVisible(isVisible)}
                />
                <BottomBarWrapper isVisible={bottomBarVisible}
                                  onClick={(isVisible) => setBottomBarVisible(isVisible)}
                />
                <Sidebar.Pusher>
                    <Segment basic>
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </React.Fragment>
    );
};


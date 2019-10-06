import React, {useState} from 'react';
import {
    Button,
    Header,
    Image,
    Segment,
    Sidebar
} from 'semantic-ui-react';
import {SidebarWrapper} from './SidebarWrapper';
import {BottomBarWrapper} from './BottomBarWrapper';

export const MainViewContainer = () => {
    const [bottomBarVisible, setBottomBarVisible] = useState(false);
    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <Sidebar.Pushable as={Segment}>
            <SidebarWrapper isVisible={sidebarVisible} onHide={(isVisible) => setSidebarVisible(isVisible)}/>
            <BottomBarWrapper isVisible={bottomBarVisible} onClick={(isVisible) => setBottomBarVisible(isVisible)}/>
            <Sidebar.Pusher>
                <Segment basic>
                    <Header as='h3'>Application Content</Header>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
                    <Button onClick={() => setBottomBarVisible(true)}>Bottom</Button>
                    <Button onClick={() => setSidebarVisible(true)}>Right</Button>
                </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};

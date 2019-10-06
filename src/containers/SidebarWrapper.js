import React from 'react';
import PropTypes from 'prop-types';
import {Icon, Menu, Sidebar} from 'semantic-ui-react';

export const SidebarWrapper = (props) => {
    return (
        <Sidebar
            as={Menu}
            animation='overlay'
            direction='right'
            icon='labeled'
            inverted
            onHide={() => props.onHide(false)}
            vertical
            visible={props.isVisible}
            width='thin'
        >
            <Menu.Item as='a'>
                <Icon name='home'/>
                Home
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='gamepad'/>
                Games
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='camera'/>
                Channels
            </Menu.Item>
        </Sidebar>
    );
};

SidebarWrapper.propTypes = {
    isVisible: PropTypes.bool,
    onHide: PropTypes.func,
};

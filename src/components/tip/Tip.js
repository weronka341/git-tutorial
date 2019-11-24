import React from 'react';
import {Card, Header, Icon} from 'semantic-ui-react';

export const Tip = (props) => (
    <Card fluid color='yellow'>
        <Card.Content className='yellow'>
            <Header as='h3'>
                <Icon name='lightbulb outline'/>
                <Header.Content>
                    {props.title}
                </Header.Content>
            </Header>
        </Card.Content>
        <Card.Content>
            <Card.Description>
                {props.children}
            </Card.Description>
        </Card.Content>
    </Card>
);

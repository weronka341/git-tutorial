import React from 'react';
import {Segment} from 'semantic-ui-react';
import './CommandText.css';

export const CommandText = (props) => (
    <Segment secondary>
        <code className='command'>
            {props.children}
        </code>
    </Segment>
);

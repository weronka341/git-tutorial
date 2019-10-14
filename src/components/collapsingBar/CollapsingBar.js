import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';
import './CollapsingBar.css';

export const CollapsingBar = (props) => {
    return (
        <div className='collapsing-bar'>
            <Icon name={props.isVisible ? 'minus square outline' : 'plus square outline'}
                  onClick={() => props.onClick(!props.isVisible)}/>
        </div>
    );
};

CollapsingBar.propTypes = {
    isVisible: PropTypes.bool,
    onClick: PropTypes.func,
};

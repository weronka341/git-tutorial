import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';
import './CollapsingBar.css';
import {setVisibility} from '../../actions/ActionCreator';
import {actions} from '../../actions/Action';
import {connect} from 'react-redux';

export const CollapsingBarComponent = (props) => {
    return (
        <div className='collapsing-bar'>
            <Icon name={props.isVisible ? 'minus square outline' : 'plus square outline'}
                  onClick={() => props.onClick(!props.isVisible)}/>
        </div>
    );
};

CollapsingBarComponent.propTypes = {
    isVisible: PropTypes.bool,
    onClick: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        isVisible: state.visibility.bottomBarVisible
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (isVisible) => dispatch(setVisibility(actions.SET_BOTTOMBAR_VISIBILITY, isVisible)),
    }
};

export const CollapsingBar = connect(mapStateToProps, mapDispatchToProps)(CollapsingBarComponent);

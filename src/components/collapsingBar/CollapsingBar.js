import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Container, Icon} from 'semantic-ui-react';
import {setVisibility} from '../../actions/ActionCreator';
import {actions} from '../../actions/Action';
import './CollapsingBar.css';

export const CollapsingBarComponent = (props) => {
    return (
        <Container fluid className={'collapsing-bar ' + (props.isVisible ? 'move' : 'stay')}
                   onClick={() => props.onClick(!props.isVisible)}>
            <Icon name={props.isVisible ? 'minus square outline' : 'plus square outline'}/>
        </Container>
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

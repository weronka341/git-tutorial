import React from 'react';
import {Icon, Menu, Message, Modal, Popup} from 'semantic-ui-react';
import {moveToContent, moveToExercise, setVisibility} from '../../actions/ActionCreator';
import {connect} from 'react-redux';
import {Tip} from '../tip/Tip';
import {exercisesText} from '../../content/tutorial/ExercisesText';
import {actions} from '../../actions/Action';

export const ExerciseHelper = (props) => (
    <Menu compact>
        <Menu.Item name='redo'>
            <Popup content='Zacznij od nowa'
                   position='top right'
                   trigger={
                       <Icon name='redo'
                             onClick={() => props.moveToExercise(props.activeExercise)}
                       />
                   }
            />
        </Menu.Item>

        <Modal trigger={renderTipPopup()}>
            <Tip title='Wskazówka'>
                {exercisesText[props.activeExercise].tip}
            </Tip>
        </Modal>

        <Menu.Item name='close'>
            <Popup content='Zakończ ćwiczenie'
                   position='top right'
                   trigger={
                       <Icon name='close'
                             onClick={() => handleExitExercise(props)}
                       />
                   }
            />
        </Menu.Item>
        <Modal open={props.isExerciseCompleted}
               onClose={() => handleExitExercise(props)}>
            <Message positive>
                <Message.Header>Brawo! Pomyślnie zaliczyłeś ćwiczenie!</Message.Header>
            </Message>
        </Modal>
    </Menu>
);

const renderTipPopup = () => (
    <Menu.Item name='tip'>
        <Popup content='Podpowiedź'
               position='top right'
               trigger={<Icon name='idea'/>}
        />
    </Menu.Item>
);

const handleExitExercise = (props) => {
    props.moveToContent();
    props.hideConsole();
    props.showSidebar();
};

const mapStateToProps = (state) => {
    return {
        activeExercise: state.animations.activeExercise,
        isExerciseCompleted: state.animations.isExerciseCompleted,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        moveToExercise: (exerciseName) => dispatch(moveToExercise(exerciseName)),
        moveToContent: () => dispatch(moveToContent()),
        showSidebar: () => dispatch(setVisibility(actions.SET_SIDEBAR_VISIBILITY, true)),
        hideConsole: () => dispatch(setVisibility(actions.SET_BOTTOMBAR_VISIBILITY, false)),
    }
};

export const ExerciseHelperMenu = connect(mapStateToProps, mapDispatchToProps)(ExerciseHelper);

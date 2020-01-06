import React from 'react';
import {connect} from 'react-redux';
import {Card, Header, Icon, Menu, Modal, Popup} from 'semantic-ui-react';
import {
    moveToContent,
    moveToExercise,
    performActionOnSidebarOption,
    setVisibility
} from '../../actions/ActionCreator';
import {Tip} from '../../components/tip/Tip';
import {exercisesText} from '../../content/tutorial/ExercisesText';
import {visibilityChangeActions, sidebarActions} from '../../actions/Action';
import {selectNextOption} from '../tutorialContentContainer/TutorialContentContainer';
import './ExerciseHelperMenu.css';

export const ExerciseHelper = (props) => {
    return (
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
            <Modal id='task-completed-modal'
                   className='show-in'
                   centered={false}
                   open={props.isExerciseCompleted}
                   onClose={() => {
                       handleCompleteExercise(props)
                   }}>
                {renderCompletedTaskInfo()}
            </Modal>
        </Menu>
    );
};

const renderTipPopup = () => (
    <Menu.Item name='tip'>
        <Popup content='Podpowiedź'
               position='top right'
               trigger={<Icon name='idea'/>}
        />
    </Menu.Item>
);

const renderCompletedTaskInfo = () => (
    <Card fluid color='teal'>
        <Card.Content className='teal'>
            <Header as='h3'>
                <Icon name='check'/>
                <Header.Content>
                    Zadanie wykonane
                </Header.Content>
            </Header>
        </Card.Content>
        <Card.Content>
            <Card.Description>
                Brawo! Pomyślnie zaliczyłeś ćwiczenie!
            </Card.Description>
        </Card.Content>
    </Card>
);

const handleExitExercise = (props) => {
    props.moveToContent();
    props.hideConsole();
    props.showSidebar();
};

const handleCompleteExercise = (props) => {
    props.moveToContent();
    props.addToVisited(props.activeOption);
    selectNextOption(props);
    props.hideConsole();
    props.showSidebar();
};

const mapStateToProps = (state) => {
    return {
        activeOption: state.sidebar.activeOption,
        visitedOptions: state.sidebar.visitedOptions,
        activeExercise: state.exercise.activeExercise,
        isExerciseCompleted: state.exercise.isExerciseCompleted,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        moveToExercise: (exerciseName) => dispatch(moveToExercise(exerciseName)),
        moveToContent: () => dispatch(moveToContent()),
        showSidebar: () => dispatch(setVisibility(visibilityChangeActions.SET_SIDEBAR_VISIBILITY, true)),
        hideConsole: () => dispatch(setVisibility(visibilityChangeActions.SET_BOTTOMBAR_VISIBILITY, false)),
        setActive: (option) => dispatch(performActionOnSidebarOption(sidebarActions.SET_ACTIVE_SIDEBAR_OPTION, option)),
        addToVisited: (option) => dispatch(performActionOnSidebarOption(sidebarActions.ADD_OPTION_TO_VISITED, option))
    }
};

export const ExerciseHelperMenu = connect(mapStateToProps, mapDispatchToProps)(ExerciseHelper);

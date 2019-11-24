import React from 'react';
import {Button, Divider, Header, Icon} from 'semantic-ui-react';
import {fullTitles} from '../content/titles/SectionTitles';
import {exercisesText} from '../content/tutorial/ExercisesText';
import '../content/tutorial/TutorialTextStyle.css';
import {moveToExercise, setVisibility} from '../actions/ActionCreator';
import {actions} from '../actions/Action';
import {connect} from 'react-redux';

export const Exercise = (props) => {
    const exercise = exercisesText[props.name];
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles[props.name]}
                </Header.Content>
            </Header>
            <Divider/>
            {exercise.intro}
            {exercise.text}
            <div className='button-container'>
                <Button positive icon
                        labelPosition='right'
                        size='large'
                        onClick={() => {
                            props.hideSidebar();
                            props.moveToExercise(props.name);
                            props.showConsole();
                        }}
                >
                    Rozpocznij ćwiczenie
                    <Icon name='right arrow'/>
                </Button>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        activeOption: state.options.activeOption,
        visitedOptions: state.options.visitedOptions,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        moveToExercise: (exerciseName) => dispatch(moveToExercise(exerciseName)),
        hideSidebar: () => dispatch(setVisibility(actions.SET_SIDEBAR_VISIBILITY, false)),
        showConsole: () => dispatch(setVisibility(actions.SET_BOTTOMBAR_VISIBILITY, true)),
    }
};

export const ExerciseIntroPage = connect(mapStateToProps, mapDispatchToProps)(Exercise);
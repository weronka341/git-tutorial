import React from 'react'
import {
    Card,
    Container,
    Icon,
    Image,
    Rail,
    Segment
} from 'semantic-ui-react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {renderSelectedTutorialSection} from '../../utils/RenderUtil';
import {performActionOnSidebarOption} from '../../actions/ActionCreator';
import {sidebarActions} from '../../actions/Action';
import {menuOptionsTitles} from '../../content/titles/SectionTitles';
import {SVGDisplayArea} from '../svgDisplayArea/SVGDisplayArea';
import {exercisesText} from '../../content/tutorial/ExercisesText';
import {ExerciseHelperMenu} from '../exerciseHelperMenu/ExerciseHelperMenu';
import originMaster from '../../images/originMaster.png';
import './TutorialContentContainer.css';

const TutorialContent = (props) => {
    return <React.Fragment>
        {props.isExerciseDisplayed
            ? renderExercise(props)
            : renderTutorialSection(props)
        }
    </React.Fragment>
};

const renderTutorialSection = (props) => {
    return (
        <Container id='welcome-page'
                   className={props.isSidebarVisible ? 'moved-content' : ''}
                   textAlign='justified'>
            {renderSelectedTutorialSection[props.activeOption]}
            <Rail position='right'>
                {checkIfOptionExists(props, 1) &&
                <Icon name='chevron right'
                      className='sticky-arrow'
                      onClick={() => selectNextOption(props)}
                />
                }
            </Rail>
            <Rail position='left'>
                {checkIfOptionExists(props, -1) &&
                <Icon name='chevron left'
                      className='sticky-arrow left'
                      onClick={() => selectPreviousOption(props)}
                />
                }
            </Rail>
        </Container>
    )
};

const renderExercise = (props) => {
    return (
        <React.Fragment>
            <Segment tertiary id='exercise-helper'>
                {exercisesText[props.activeOption].text}
                <ExerciseHelperMenu/>
            </Segment>
            <SVGDisplayArea/>
            {props.activeExercise === 'PULL_EXERCISE' &&
            <Card id='origin-display' color='orange'>
                <Card.Content>
                    <Card.Header>origin</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Card.Description>
                        <Image src={originMaster}/>
                    </Card.Description>
                </Card.Content>
            </Card>
            }
        </React.Fragment>);
};

export const selectNextOption = (props) => {
    const optionsArray = Object.keys(menuOptionsTitles);
    const activeOptionIndex = optionsArray.indexOf(props.activeOption);
    const nextOptionIndex = activeOptionIndex + 1;
    if (activeOptionIndex !== -1 && optionsArray[nextOptionIndex]) {
        props.setActive(optionsArray[nextOptionIndex]);
        props.addToVisited(optionsArray[nextOptionIndex]);
    }
};

const selectPreviousOption = (props) => {
    const optionsArray = Object.keys(menuOptionsTitles);
    const activeOptionIndex = optionsArray.indexOf(props.activeOption);
    const previousOptionIndex = activeOptionIndex - 1;
    if (activeOptionIndex !== -1 && optionsArray[previousOptionIndex]) {
        props.setActive(optionsArray[previousOptionIndex]);
        props.addToVisited(optionsArray[previousOptionIndex]);
    }
};

const checkIfOptionExists = (props, indexOffset) => {
    const optionsArray = Object.keys(menuOptionsTitles);
    const activeOptionIndex = optionsArray.indexOf(props.activeOption);
    const previousOptionIndex = activeOptionIndex + indexOffset;
    return activeOptionIndex !== -1 && optionsArray[previousOptionIndex];
};

TutorialContent.propTypes = {
    isSidebarVisible: PropTypes.bool,
};

const mapStateToProps = (state) => {
    return {
        isSidebarVisible: state.visibility.sidebarVisible,
        activeOption: state.sidebar.activeOption,
        visitedOptions: state.sidebar.visitedOptions,
        isExerciseDisplayed: state.exercise.isExerciseDisplayed,
        activeExercise: state.exercise.activeExercise,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setActive: (option) => dispatch(performActionOnSidebarOption(sidebarActions.SET_ACTIVE_SIDEBAR_OPTION, option)),
        addToVisited: (option) => dispatch(performActionOnSidebarOption(sidebarActions.ADD_OPTION_TO_VISITED, option)),
    }
};

export const TutorialContentContainer = connect(mapStateToProps, mapDispatchToProps)(TutorialContent);

import React from 'react'
import {
    Container,
    Grid,
    GridColumn,
    GridRow,
    Icon,
    Rail,
    Segment
} from 'semantic-ui-react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {renderSelectedTutorialSection} from '../../utils/RenderUtil';
import {performActionOnSidebarOption} from '../../actions/ActionCreator';
import {actions} from '../../actions/Action';
import {menuOptionsTitles} from '../../content/titles/SectionTitles';
import {SVGDisplayArea} from '../svgDisplayArea/SVGDisplayArea';
import {exercisesText} from '../../content/tutorial/ExercisesText';
import {ExerciseHelperMenu} from '../../components/exerciseHelperMenu/ExerciseHelperMenu';
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
                <Icon name='chevron right'
                      className='sticky-arrow'
                      onClick={() => selectNextOption(props)}
                />
            </Rail>
            <Rail position='left'>
                <Icon name='chevron left'
                      className='sticky-arrow left'
                      onClick={() => selectPreviousOption(props)}
                />
            </Rail>
        </Container>
    )
};

const renderExercise = (props) => {
    return (
        <React.Fragment>
            <Segment tertiary id='exercise-helper'>
                <Grid verticalAlign='middle' columns={2} centered>
                    <GridRow>
                        <GridColumn width={14}>
                            {exercisesText[props.activeOption].text}
                        </GridColumn>
                        <GridColumn width={2}>
                            <ExerciseHelperMenu/>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Segment>
            <SVGDisplayArea/>
        </React.Fragment>);
};

const selectNextOption = (props) => {
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

TutorialContent.propTypes = {
    isSidebarVisible: PropTypes.bool,
};

const mapStateToProps = (state) => {
    return {
        isSidebarVisible: state.visibility.sidebarVisible,
        activeOption: state.options.activeOption,
        visitedOptions: state.options.visitedOptions,
        isExerciseDisplayed: state.animations.isExerciseDisplayed,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setActive: (option) => dispatch(performActionOnSidebarOption(actions.SET_ACTIVE_SIDEBAR_OPTION, option)),
        addToVisited: (option) => dispatch(performActionOnSidebarOption(actions.ADD_OPTION_TO_VISITED, option))
    }
};

export const TutorialContentContainer = connect(mapStateToProps, mapDispatchToProps)(TutorialContent);

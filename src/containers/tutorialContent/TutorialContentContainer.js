import React from 'react'
import {Container, Icon, Rail} from 'semantic-ui-react'
import './TutorialContentContainer.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {renderSelectedTutorialSection} from '../../utils/RenderUtil';
import {performActionOnSidebarOption} from '../../actions/ActionCreator';
import {actions} from '../../actions/Action';
import {menuOptionsTitles} from '../../content/titles/SectionTitles';

const TutorialContent = (props) => {
    const {activeOption} = props;
    return (
        <Container id='welcome-page'
                   className={props.isSidebarVisible ? 'moved-content' : ''}
                   textAlign='justified'>
            {renderSelectedTutorialSection[activeOption]}
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
    );
};

TutorialContent.propTypes = {
    isSidebarVisible: PropTypes.bool,
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

const mapStateToProps = (state) => {
    return {
        isSidebarVisible: state.visibility.sidebarVisible,
        activeOption: state.options.activeOption,
        visitedOptions: state.options.visitedOptions,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setActive: (option) => dispatch(performActionOnSidebarOption(actions.SET_ACTIVE_SIDEBAR_OPTION, option)),
        addToVisited: (option) => dispatch(performActionOnSidebarOption(actions.ADD_OPTION_TO_VISITED, option))
    }
};

export const TutorialContentContainer = connect(mapStateToProps, mapDispatchToProps)(TutorialContent);

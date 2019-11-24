import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {actions} from '../../actions/Action';
import {Icon, Step} from 'semantic-ui-react';
import {menuOptionsTitles} from '../../content/titles/SectionTitles';
import {performActionOnSidebarOption} from '../../actions/ActionCreator';

const SidebarOptionsComponent = (props) => {
    return (
        <Step.Group vertical
                    className='dark'
                    size='tiny'
        >
            {Object.entries(menuOptionsTitles).map(([option, title]) =>
                <Step key={option}
                      completed={isOptionVisited(props, option)}
                      active={isOptionActive(props, option)}
                      onClick={option.includes('EXERCISE')
                          ? () => props.setActive(option)
                          : () => {
                              props.setActive(option);
                              props.addToVisited(option);
                          }
                      }
                >
                    <Icon
                        className='option-icon'
                        name={option.includes('EXERCISE') ? 'code branch' : 'asexual'}
                    />
                    <Step.Content>
                        <Step.Title>{title}</Step.Title>
                    </Step.Content>
                </Step>
            )}
        </Step.Group>
    );
};

const isOptionVisited = (props, option) => {
    return props.visitedOptions
        .filter(option => option !== props.activeOption && !option.includes('EXERCISE'))
        .includes(option);
};

const isOptionActive = (props, option) => {
    return props.activeOption === option;
};

SidebarOptionsComponent.propTypes = {
    activeOption: PropTypes.string,
    visitedOptions: PropTypes.array,
    onClick: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
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

export const SidebarOptions = connect(mapStateToProps, mapDispatchToProps)(SidebarOptionsComponent);

import React, {createRef} from 'react';
import {connect} from 'react-redux';
import {Container, Input} from 'semantic-ui-react';
import {
    addCommit,
    addMergeCommit,
    checkExerciseStatus,
    pull,
    rebase,
    refAction,
    reset
} from '../../actions/ActionCreator';
import {exerciseActions} from '../../actions/Action';
import {commandParser} from '../../utils/CommandParser';
import {animateScroll} from 'react-scroll';
import './CommandLine.css';

class CommandLineContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            consoleDisplayText: [],
        };
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter' && this.state.value) {
            this.dispatchAction();
        }
    };

    dispatchAction = () => {
        const command = this.state.value;
        const action = commandParser(command, this.props.refs, this.props.activeRef);
        if (this.props.activeExercise !== 'PULL_EXERCISE') {
            switch (action && action.type) {
                case exerciseActions.ADD_COMMIT:
                    this.props.addCommit();
                    break;
                case exerciseActions.ADD_REF:
                    this.props.addRef(action.ref);
                    break;
                case exerciseActions.CHECKOUT_REF:
                    this.props.checkoutRef(action.ref);
                    break;
                case exerciseActions.CHECKOUT_REF_B:
                    this.props.addRef(action.ref);
                    this.props.checkoutRef(action.ref);
                    break;
                case exerciseActions.CREATE_AND_CHECKOUT_REF_FROM_REF:
                    this.props.checkoutRef(action.baseRef);
                    this.props.addRef(action.newRef);
                    this.props.checkoutRef(action.newRef);
                    break;
                case exerciseActions.CREATE_REF_FROM_REF:
                    this.props.checkoutRef(action.baseRef);
                    this.props.addRef(action.newRef);
                    this.props.checkoutRef(action.activeRef);
                    break;
                case exerciseActions.ADD_MERGE_COMMIT:
                    this.props.addMergeCommit(action.refName);
                    break;
                case exerciseActions.REBASE:
                    this.props.rebase(action.refName);
                    break;
                case exerciseActions.RESET:
                    this.props.reset(action.commitsToReset);
                    break;
                default:
                    break;
            }
            action.type === exerciseActions.PULL
                ? this.addCommandTextToDisplay(command, {message: ' - nie masz połączenia ze zdalnym repozytorium.'})
                : this.addCommandTextToDisplay(command, action);

        } else if (action && action.type && action.type === exerciseActions.PULL) {
            this.props.pull();
            this.addCommandTextToDisplay(command, action);
        } else {
            action && action.message
                ? this.addCommandTextToDisplay(command, action)
                : this.addCommandTextToDisplay(command, {message: ' - ta komenda nie jest obsługiwana w tym ćwiczeniu.'})
        }
        this.props.checkExerciseStatus(this.props.activeExercise);
    };

    addCommandTextToDisplay = (command, action) => {
        const text = action && action.message
            ? command + action.message
            : command;
        const updatedConsoleDisplayText = this.addTextToDisplay(text);
        this.setState({value: '', consoleDisplayText: updatedConsoleDisplayText});
    };

    addTextToDisplay = (text) => {
        const {consoleDisplayText} = this.state;
        return consoleDisplayText.length > 10
            ? [...consoleDisplayText.slice(1), text]
            : [...consoleDisplayText, text];
    };

    scrollToBottom = () => {
        animateScroll.scrollToBottom({
            containerId: 'command-history'
        });
    };

    inputRef = createRef();
    handleClick = () => this.inputRef.current.focus();

    render() {
        return (
            <div className={'command-line ' + (this.props.isVisible ? 'visible' : 'hidden')}>
                <Container fluid id='command-history'
                           onClick={this.handleClick}>
                    {this.state.consoleDisplayText.map((text, index) => <span key={index}>$ {text}<br/></span>)}
                </Container>
                <Input icon='dollar' iconPosition='left' fluid spellCheck='false'
                       disabled={!this.props.isExerciseDisplayed}
                       ref={this.inputRef}
                       onChange={(e) => this.setState({...this.state, value: e.target.value})}
                       onKeyPress={(e) => this.handleKeyPress(e)} value={this.state.value}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isVisible: state.visibility.bottomBarVisible,
        refs: state.exercise.refs,
        activeRef: state.exercise.activeRef,
        isExerciseDisplayed: state.exercise.isExerciseDisplayed,
        activeExercise: state.exercise.activeExercise,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCommit: () => dispatch(addCommit()),
        addMergeCommit: (refName) => dispatch(addMergeCommit(refName)),
        addRef: (name) => dispatch(refAction(exerciseActions.ADD_REF, name)),
        rebase: (name) => dispatch(rebase(name)),
        reset: (commitsNumber) => dispatch(reset(commitsNumber)),
        pull: () => dispatch(pull()),
        checkoutRef: (name) => dispatch(refAction(exerciseActions.CHECKOUT_REF, name)),
        checkExerciseStatus: (activeExercise) => dispatch(checkExerciseStatus(activeExercise)),
    }
};

export const CommandLine = connect(mapStateToProps, mapDispatchToProps)(CommandLineContainer);

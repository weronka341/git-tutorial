import React, {createRef} from 'react';
import {connect} from 'react-redux';
import {Container, Input} from 'semantic-ui-react';
import {addCommit, checkExerciseStatus, refAction} from '../../actions/ActionCreator';
import {actions} from '../../actions/Action';
import {commandParser} from '../../utils/CommandParser';
import {animateScroll} from 'react-scroll';
import './CommandLine.css';

class CommandLineComponent extends React.Component {
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
        const action = commandParser(command, this.props.refs);
        switch (action && action.type) {
            case actions.ADD_COMMIT:
                this.props.addCommit();
                break;
            case actions.ADD_REF:
                this.props.addRef(action.ref);
                break;
            case actions.CHECKOUT_REF:
                this.props.checkoutRef(action.ref);
                break;
            case actions.CHECKOUT_REF_B:
                this.props.addRef(action.ref);
                this.props.checkoutRef(action.ref);
                break;
            default:
                break;
        }
        this.addCommandTextToDisplay(command, action);
        setTimeout(() => this.props.checkExerciseStatus(this.props.activeExercise), 900);
    };

    addCommandTextToDisplay = (command, action) => {
        const {consoleDisplayText} = this.state;
        const text = action && action.message
            ? command + action.message
            : command;
        const updatedConsoleDisplayText = consoleDisplayText.length > 10
            ? [...consoleDisplayText.slice(1), text]
            : [...consoleDisplayText, text];
        this.setState({value: '', consoleDisplayText: updatedConsoleDisplayText});
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
        refs: state.animations.refs,
        isExerciseDisplayed: state.animations.isExerciseDisplayed,
        activeExercise: state.animations.activeExercise,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCommit: () => dispatch(addCommit()),
        addRef: (name) => dispatch(refAction(actions.ADD_REF, name)),
        checkoutRef: (name) => dispatch(refAction(actions.CHECKOUT_REF, name)),
        checkExerciseStatus: (activeExercise) => dispatch(checkExerciseStatus(activeExercise)),
    }
};

export const CommandLine = connect(mapStateToProps, mapDispatchToProps)(CommandLineComponent);

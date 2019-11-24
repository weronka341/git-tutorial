import React from 'react';
import PropTypes from 'prop-types';
import './CommandLine.css';
import {connect} from 'react-redux';
import {Input} from 'semantic-ui-react';
import {addCommit, checkExerciseStatus, refAction} from '../../actions/ActionCreator';
import {actions} from '../../actions/Action';
import {commandParser} from '../../utils/CommandParser';

class CommandLineComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.dispatchAction();
            this.setState({value: ''});
        }
    };

    dispatchAction() {
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
            default:
                return;
        }
        this.props.checkExerciseStatus(this.props.activeExercise);
    }

    render() {
        return (
            <div className={'command-line ' + (this.props.isVisible ? 'visible' : 'hidden')}>
                <Input icon='dollar' iconPosition='left' fluid spellCheck='false'
                       disabled={!this.props.isExerciseDisplayed}
                       focus={this.props.isExerciseDisplayed}
                       onChange={(e) => this.setState({value: e.target.value})}
                       onKeyPress={(e) => this.handleKeyPress(e)} value={this.state.value}/>
            </div>
        );
    }
}

CommandLineComponent.propTypes = {
    isVisible: PropTypes.bool,
};

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

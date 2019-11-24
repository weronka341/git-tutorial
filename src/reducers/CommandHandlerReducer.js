import {actions} from '../actions/Action';

const initialCommandHandlerState = {
    commandHistory: [],
    command: '',
};

export const commandHandlerReducer = (state = initialCommandHandlerState, action) => {
    switch (action.type) {
        case actions.SUBMIT_COMMAND:
            return state;
        default:
            return state;
    }
};

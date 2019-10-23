import {actions} from '../actions/Action';

const initialTableOfContentState = {
    activeOption: null,
    visitedOptions: [],
};

export const sidebarOptionsReducer = (state = initialTableOfContentState, action) => {
    switch (action.type) {
        case actions.SET_ACTIVE_SIDEBAR_OPTION:
            return {
                ...state,
                activeOption: action.optionID
            };
        case actions.ADD_OPTION_TO_VISITED:
            return {
                ...state,
                visitedOptions: state.visitedOptions.concat(action.optionID)
            };
        default:
            return state;
    }
};

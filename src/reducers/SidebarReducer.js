import {sidebarActions} from '../actions/Action';

const initialTableOfContentState = {
    activeOption: 'INTRODUCTION',
    visitedOptions: ['INTRODUCTION'],
};

export const sidebarReducer = (state = initialTableOfContentState, action) => {
    switch (action.type) {
        case sidebarActions.SET_ACTIVE_SIDEBAR_OPTION:
            return {
                ...state,
                activeOption: action.optionID
            };
        case sidebarActions.ADD_OPTION_TO_VISITED:
            return {
                ...state,
                visitedOptions: state.visitedOptions.concat(action.optionID)
            };
        default:
            return state;
    }
};

import React from 'react'
import {visibilityChangeActions} from '../actions/Action';

const initialVisibilityState = {
    sidebarVisible: false,
    bottomBarVisible: false,
    toggleSidebarRef: React.createRef(),
};

export const visibilityChangeReducer = (state = initialVisibilityState, action) => {
    switch (action.type) {
        case visibilityChangeActions.SET_SIDEBAR_VISIBILITY:
            return {
                ...state,
                sidebarVisible: action.isVisible,
            };
        case visibilityChangeActions.SET_BOTTOMBAR_VISIBILITY:
            return {
                ...state,
                bottomBarVisible: action.isVisible,
            };
        default:
            return state;
    }
};

import React from 'react'
import {actions} from '../actions/Action';

const initialVisibilityState = {
    sidebarVisible: false,
    bottomBarVisible: false,
    toggleSidebarRef: React.createRef(),
};

export const visibilityReducer = (state = initialVisibilityState, action) => {
    switch (action.type) {
        case actions.SET_SIDEBAR_VISIBILITY:
            return {
                ...state,
                sidebarVisible: action.isVisible,
            };
        case actions.SET_BOTTOMBAR_VISIBILITY:
            return {
                ...state,
                bottomBarVisible: action.isVisible,
            };
        default:
            return state;
    }
};

import {actions, exerciseActions} from './Action';

export const setVisibility = (action, isVisible) => ({
    type: action,
    isVisible,
});

export const performActionOnSidebarOption = (action, optionID) => ({
    type: action,
    optionID,
});

export const resizeSvgContent = (action, shouldResizeContent) => ({
    type: action,
    shouldResizeContent,
});

export const addCommit = () => ({
    type: actions.ADD_COMMIT,
});

export const refAction = (action, name) => ({
    type: action,
    name,
});

export const moveToExercise = (exerciseName) => ({
    type: actions.MOVE_TO_EXERCISE,
    exerciseName,
});

export const moveToContent = () => ({
    type: actions.MOVE_TO_CONTENT,
});

export const checkExerciseStatus = () => ({
    type: exerciseActions.CHECK_EXERCISE_STATUS,
});

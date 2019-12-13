import {actions, exerciseActions} from './Action';

export const setVisibility = (action, isVisible) => ({
    type: action,
    isVisible,
});

export const performActionOnSidebarOption = (action, optionID) => ({
    type: action,
    optionID,
});

export const addCommit = () => ({
    type: actions.ADD_COMMIT,
});

export const addMergeCommit = (refName) => ({
    type: actions.ADD_MERGE_COMMIT,
    refName,
});

export const rebase = (refName) => ({
    type: actions.REBASE,
    refName,
});

export const reset = (commitsToReset) => ({
    type: actions.RESET,
    commitsToReset,
});

export const pull = () => ({
    type: actions.PULL,
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

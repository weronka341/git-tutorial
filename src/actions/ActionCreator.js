import {exerciseActions, modeChangeActions} from './Action';

export const setVisibility = (action, isVisible) => ({
    type: action,
    isVisible,
});

export const performActionOnSidebarOption = (action, optionID) => ({
    type: action,
    optionID,
});

export const addCommit = () => ({
    type: exerciseActions.ADD_COMMIT,
});

export const addMergeCommit = (refName) => ({
    type: exerciseActions.ADD_MERGE_COMMIT,
    refName,
});

export const rebase = (refName) => ({
    type: exerciseActions.REBASE,
    refName,
});

export const reset = (commitsToReset) => ({
    type: exerciseActions.RESET,
    commitsToReset,
});

export const pull = () => ({
    type: exerciseActions.PULL,
});

export const refAction = (action, name) => ({
    type: action,
    name,
});

export const moveToExercise = (exerciseName) => ({
    type: modeChangeActions.MOVE_TO_EXERCISE,
    exerciseName,
});

export const moveToContent = () => ({
    type: modeChangeActions.MOVE_TO_CONTENT,
});

export const checkExerciseStatus = () => ({
    type: exerciseActions.CHECK_EXERCISE_STATUS,
});

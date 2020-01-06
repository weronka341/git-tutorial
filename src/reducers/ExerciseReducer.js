import {modeChangeActions, exerciseActions} from '../actions/Action';
import {addCommit, addRef, checkoutRef, checkExerciseStatus, rebase, reset, pull} from './ActionHandler';
import {exercisesState, initialAnimationState} from './ExerciseReducerState';

const initialExercisesState = {
    ...initialAnimationState,
    isExerciseDisplayed: false,
    isExerciseCompleted: false,
    activeExercise: null,
};

export const exerciseReducer = (state = initialExercisesState, action) => {
    switch (action.type) {
        case modeChangeActions.MOVE_TO_EXERCISE:
            return {
                ...state,
                ...exercisesState[action.exerciseName].initial,
                isExerciseDisplayed: true,
                activeExercise: action.exerciseName,
            };
        case modeChangeActions.MOVE_TO_CONTENT:
            return {
                ...initialExercisesState,
                isExerciseDisplayed: false,
                activeExercise: null,
            };
        case exerciseActions.ADD_COMMIT:
            return {
                ...addCommit(state, false),
            };
        case exerciseActions.ADD_MERGE_COMMIT:
            return {
                ...addCommit(state, true, action.refName),
            };
        case exerciseActions.ADD_REF:
            return {
                ...addRef(state, action.name),
            };
        case exerciseActions.CHECKOUT_REF:
            return {
                ...checkoutRef(state, action.name),
            };
        case exerciseActions.REBASE:
            return {
                ...rebase(state, action.refName),
            };
        case exerciseActions.RESET:
            return {
                ...reset(state, action.commitsToReset),
            };

        case exerciseActions.PULL:
            return {
                ...pull(state),
            };
        case exerciseActions.CHECK_EXERCISE_STATUS:
            return {
                ...state,
                isExerciseCompleted: checkExerciseStatus(state),
            };
        default:
            return state;
    }
};

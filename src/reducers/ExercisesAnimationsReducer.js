import {actions, exerciseActions} from '../actions/Action';
import {addCommit, addRef, checkoutRef, checkExerciseStatus, rebase, reset, pull} from './ActionHandler';
import {exercisesState, initialAnimationState} from './ExercisesAnimationReducerStates';

const initialExercisesState = {
    ...initialAnimationState,
    isExerciseDisplayed: false,
    isExerciseCompleted: false,
    activeExercise: null,
};

export const exerciseAnimationReducer = (state = initialExercisesState, action) => {
    switch (action.type) {
        case actions.MOVE_TO_EXERCISE:
            return {
                ...state,
                ...exercisesState[action.exerciseName].initial,
                isExerciseDisplayed: true,
                activeExercise: action.exerciseName,
            };
        case actions.MOVE_TO_CONTENT:
            return {
                ...initialExercisesState,
                isExerciseDisplayed: false,
                activeExercise: null,
            };
        case actions.ADD_COMMIT:
            return {
                ...addCommit(state, false),
            };
        case actions.ADD_MERGE_COMMIT:
            return {
                ...addCommit(state, true, action.refName),
            };
        case actions.ADD_REF:
            return {
                ...addRef(state, action.name),
            };
        case actions.CHECKOUT_REF:
            return {
                ...checkoutRef(state, action.name),
            };
        case actions.REBASE:
            return {
                ...rebase(state, action.refName),
            };
        case actions.RESET:
            return {
                ...reset(state, action.commitsToReset),
            };

        case actions.PULL:
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

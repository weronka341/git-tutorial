import {actions, exerciseActions} from '../actions/Action';
import {addCommit, addRef, resizeDimensions, checkoutRef, checkExerciseStatus} from './ActionHandler';
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
                ...exercisesState[action.exerciseName].initial,
                isExerciseDisplayed: true,
                activeExercise: action.exerciseName,
            };
        case actions.MOVE_TO_CONTENT:
            return {
                ...state,
                isExerciseDisplayed: false,
                activeExercise: null,
            };
        case actions.RESIZE_SVG_CONTENT:
            return {
                ...state,
                dimensions: resizeDimensions(state, -3),
            };
        case actions.ADD_COMMIT:
            return {
                ...addCommit(state),
            };
        case actions.ADD_REF:
            return {
                ...addRef(state, action.name),
            };
        case actions.CHECKOUT_REF:
            return {
                ...checkoutRef(state, action.name),
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

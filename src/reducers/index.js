import {combineReducers} from 'redux'
import {visibilityChangeReducer} from './VisibilityChangeReducer';
import {sidebarReducer} from './SidebarReducer';
import {exerciseReducer} from './ExerciseReducer';

export default combineReducers({
    visibility: visibilityChangeReducer,
    sidebar: sidebarReducer,
    exercise: exerciseReducer,
});

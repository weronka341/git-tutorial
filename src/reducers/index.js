import {combineReducers} from 'redux'
import {visibilityReducer} from './VisibilityReducer';
import {sidebarOptionsReducer} from './SidebarOptionsReducer';
import {exerciseAnimationReducer} from './ExercisesAnimationsReducer';
import {commandHandlerReducer} from './CommandHandlerReducer';

export default combineReducers({
    visibility: visibilityReducer,
    options: sidebarOptionsReducer,
    animations: exerciseAnimationReducer,
    commands: commandHandlerReducer,
});

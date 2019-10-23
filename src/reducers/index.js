import {combineReducers} from 'redux'
import {visibilityReducer} from './VisibilityReducer';
import {sidebarOptionsReducer} from './SidebarOptionsReducer';

export default combineReducers({
    visibility: visibilityReducer,
    options: sidebarOptionsReducer,
});

import { combineReducers } from 'redux';
import SmartHomeReducer from './SmartHomeReducer';

const rootReducer = combineReducers({
  SmartHomeReducer
});

//export default rootReducer;
export default SmartHomeReducer;
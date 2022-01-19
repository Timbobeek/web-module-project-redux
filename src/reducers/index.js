import { combineReducers } from 'redux';
import favReducer from './favReducer';

import movieReducer from './movieReducer';

const mainReducer = combineReducers({favReducer, movieReducer})

export default mainReducer;
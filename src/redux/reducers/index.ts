import {combineReducers} from 'redux';
import SearchReducer from './Search';

const rootReducer = combineReducers({
  searchData: SearchReducer,
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;

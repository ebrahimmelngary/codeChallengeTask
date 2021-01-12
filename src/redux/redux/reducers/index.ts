import {combineReducers} from 'redux';
import DummyUserReducer from './DummyUser';
import LangReducer from './Lang';
import PaymentReducer from './Payment';
import ThemeReducer from './Theme';

const rootReducer = combineReducers({
  lang: LangReducer,
  payment: PaymentReducer,
  dummyUser: DummyUserReducer,
  theme: ThemeReducer,
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;

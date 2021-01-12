import {CHANGE_THEME} from '../../actions/types';

export type ThemeType = 'darkColors' | 'lightColors';

export default (
  state: ThemeType = 'lightColors',
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
};

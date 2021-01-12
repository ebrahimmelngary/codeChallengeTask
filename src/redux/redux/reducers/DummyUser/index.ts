import {DUMMY_USER_SCAN} from '../../actions/types';

const INITIALSTATE = {
  data: null,
  token: null,
};

export default (state = INITIALSTATE, action: any) => {
  switch (action.type) {
    case DUMMY_USER_SCAN:
      return {
        ...state,
        token: action.payload.data.data.token,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

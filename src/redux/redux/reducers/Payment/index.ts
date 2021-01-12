import {CreditCardList} from '../../../utils';
import {PaymentActionType} from '../../actions/Payment/types';

const INITIAL_STATE: CreditCardList = [];

export default (
  state = INITIAL_STATE,
  action: PaymentActionType,
): CreditCardList => {
  switch (action.type) {
    case 'ADD_CREDIT_CARD':
      return [...state, action.payload];
    case 'DELETE_CREDIT_CARD':
      return state.filter((i) => i.id !== action.payload);
    default:
      return state;
  }
};

import {
  TRANSACTION_REQUEST,
  TRANSACTION_SUCCESS,
  TRANSACTION_FAILURE
} from "./types";

const initialState = {
  sendingTransaction: false,
  transactions: {}
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTION_REQUEST:
      return {
        ...state,
        sendingTransaction: true
      };
    case TRANSACTION_SUCCESS:
      return {
        ...state,
        sendingTransaction: false,
        transactions: [
          ...state.transactions,
          {
            to: action.to,
            value: action.value
          }
        ]
      };
    case TRANSACTION_FAILURE:
      return {
        ...state,
        sendingTransaction: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default tokenReducer;

import {
  TRANSACTION_REQUEST,
  TRANSACTION_SUCCESS,
  TRANSACTION_FAILURE
} from "./types";

export const transactionRequest = () => ({
  type: TRANSACTION_REQUEST
});

export const transactionSuccess = (to, value) => ({
  type: TRANSACTION_SUCCESS,
  to,
  value
});

export const transactionFailure = error => ({
  type: TRANSACTION_FAILURE,
  error
});

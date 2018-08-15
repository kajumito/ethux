import EthHandler from "../../../utils/EthHandler";
import {
  transactionRequest,
  transactionSuccess,
  transactionFailure
} from "./actions";

export const sendTokens = (to, value) => async (dispatch, getState) => {
  const web3 = getState().web3.web3Instance;
  try {
    dispatch(transactionRequest(to, value));
    const accounts = await web3.eth.getAccounts();
    this.ethHandler = new EthHandler(accounts[0], web3.currentProvider);
    await this.ethHandler.sendTokens(to, value);
    dispatch(transactionSuccess(to, value));
  } catch (error) {
    dispatch(transactionFailure(error));
  }
};

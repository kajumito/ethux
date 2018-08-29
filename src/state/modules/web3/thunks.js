import Web3 from "web3";

import { checkWeb3, injectedWeb3, fallbackWeb3 } from "./actions";

export const loadWeb3 = () => dispatch => {
  window.addEventListener("load", () => {
    dispatch(checkWeb3());
    let { web3 } = window;
    if (typeof web3 !== "undefined") {
      web3 = new Web3(web3.currentProvider);
      dispatch(injectedWeb3(web3));
    } else {
      const localProvider = new Web3.providers.HttpProvider(
        "http://127.0.0.1:9545"
      );
      web3 = new Web3(localProvider);
      dispatch(fallbackWeb3(web3));
    }
  });
};

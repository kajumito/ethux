import { CHECK_WEB3, INJECTED_WEB3, FALLBACK_WEB3 } from "./types";
/**
 * Initialized
 * 0: Offline
 * 1: Injected/Online
 * 2: Local (http://127.0.0:9545)
 */
const initialState = {
  initialized: 0,
  isLoading: false,
  web3Instance: {}
};

const web3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_WEB3:
      return {
        ...state,
        isLoading: true
      };
    case INJECTED_WEB3:
      return {
        ...state,
        initialized: 1,
        isLoading: false,
        web3Instance: action.web3Instance
      };
    case FALLBACK_WEB3:
      return {
        ...state,
        initialized: 2,
        isLoading: false,
        web3Instance: action.web3Instance
      };
    default:
      return state;
  }
};

export default web3Reducer;

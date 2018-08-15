import { CHECK_WEB3, INJECTED_WEB3, FALLBACK_WEB3 } from "./types";

export const checkWeb3 = () => ({
  type: CHECK_WEB3
});

export const injectedWeb3 = web3Instance => ({
  type: INJECTED_WEB3,
  web3Instance
});

export const fallbackWeb3 = web3Instance => ({
  type: FALLBACK_WEB3,
  web3Instance
});

import TokenHandler from "./ethHandler/TokenHandler";

export default class ethHandler {
  constructor(coinbase, provider) {
    this.coinbase = coinbase;
    this.tokenHandler = new TokenHandler(coinbase, provider);
  }

  sendTokens = async (to, value) => {
    try {
      await this.tokenHandler.sendTokens(this.coinbase, to, value);
    } catch (error) {
      throw error;
    }
  };
}

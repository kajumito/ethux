import ExampleToken from "../../ethereum/build/contracts/ExampleToken";
import ContractHandler from "../ContractHandler";

export default class TokenHandler extends ContractHandler {
  constructor(coinbase, provider) {
    super();
    this.tokenContract = ContractHandler.loadContract(
      ExampleToken,
      coinbase,
      provider
    );
  }

  sendTokens = async (from, to, value) => {
    const instance = await this.tokenContract.deployed();
    return instance.transfer(to, value, { from });
  };
}

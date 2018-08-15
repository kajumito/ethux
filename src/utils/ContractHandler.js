import Contract from "truffle-contract";

export default class ContractHandler {
  static loadContract(contract, coinbase, provider) {
    const c = Contract(contract);
    c.setProvider(provider);
    c.web3.eth.defaultAccount = coinbase;
    return c;
  }
}

export const networks = [56, 97, 5]

export const ChainId = {
  MAINNET: 56,
  BSCTESTNET: 97,
  GÖRLI: 5,
};

export const routerAddress = new Map();
routerAddress.set(ChainId.MAINNET, "0x10ED43C718714eb63d5aA57B78B54704E256024E");
routerAddress.set(ChainId.BSCTESTNET, "0xD99D1c33F9fC3444f8101754aBC46c52416550D1");
routerAddress.set(ChainId.GÖRLI, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
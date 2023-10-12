// import { ChainId } from '@sushiswap/sdk';
import { InjectedConnector } from '@web3-react/injected-connector';
//import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
//import { Wallet } from 'ethers';
import { NetworkConnector } from './NetworkConnector';

//import ARTION_LOGO_URL from '../assets/svgs/logo_blue.svg';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

const RPC = isMainnet
  ? {
    [250]: 'https://rpc.fantom.gateway.fm',
  }
  : {
    [4002]: 'https://rpc.testnet.fantom.network',
  };

export const network = new NetworkConnector({
  defaultChainId: 4002,
  urls: RPC,
});

export const injected = new InjectedConnector({
  supportedChainIds: isMainnet
    ? [
      250, // fantom
    ]
    : [
      4002, // fantom testnet
    ],
});

export const walletconnect = new WalletConnectConnector({
  rpcUrl: 'https://rpc.testnet.fantom.network',
  chainId: 4002,
  networkId: 4002,
  rpc: {
    250: 'https://rpc.fantom.gateway.fm',
    4002: 'https://rpc.testnet.fantom.network',
  }
});

// export const walletlink = new WalletLinkConnector({
//   url: 'https://rpc.zookeeper.finance',
//   appName: 'OpenZoo',
//   appLogoUrl: ARTION_LOGO_URL,
// });

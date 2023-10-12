// import { ChainId } from '@sushiswap/sdk';

import { WFTM_ABI } from './abi';
import { calculateGasMargin } from 'utils';
import useConnectionUtils from 'hooks/useConnectionUtils';
import useContract from 'hooks/useContract';
import { ethers } from 'ethers';

const WFTM_ADDRESS = {
  250: '',
  4002: '0xf1277d1ed8ad466beddf92ef448a132661956621',
};

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';
const CHAIN = isMainnet ? 250 : 4002;
export const useWFTMContract = () => {
  const { getContract } = useContract();
  const {getHigherGWEI} = useConnectionUtils();
  const wftmAddress = WFTM_ADDRESS[CHAIN];

  const getWFTMContract = async () => await getContract(wftmAddress, WFTM_ABI);

  const getWFTMBalance = async address => {
    const contract = await getWFTMContract();
    return await contract.balanceOf(address);
  };

  const wrapFTM = async (value, from) => {
    const contract = await getWFTMContract();

    const options = {
      value,
      from,
      gasPrice: getHigherGWEI(),
    };

    const gasEstimate = await contract.estimateGas.deposit(options);
    options.gasLimit = calculateGasMargin(gasEstimate);

    return await contract.deposit(options);
  };

  const unwrapFTM = async value => {
    const contract = await getWFTMContract();

    const options = {
      gasPrice: getHigherGWEI(),
    };

    return await contract.withdraw(value, options);
  };

  const getAllowance = async (owner, spender) => {
    const contract = await getWFTMContract();
    return await contract.allowance(owner, spender);
  };

  const approve = async (address, value) => {
    const contract = await getWFTMContract();
    const tx = await contract.approve(
      address,
      ethers.constants.MaxUint256 || value
    );
    await tx.wait();
  };

  return {
    wftmAddress,
    getWFTMBalance,
    wrapFTM,
    unwrapFTM,
    getAllowance,
    approve,
  };
};

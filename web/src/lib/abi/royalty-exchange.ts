export const ROYALTY_EXCHANGE_ADDRESS = '0x6bA5a0c17FcD03311A39C9aDACdDfdfb799396d6' as `0x${string}`;

export const ROYALTY_EXCHANGE_ABI = [
  {
    inputs: [
      { internalType: 'address', name: 'initialOwner', type: 'address' },
      { internalType: 'contract IERC20', name: 'royaltyToken', type: 'address' },
      { internalType: 'contract IERC20', name: 'stablecoin', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  { inputs: [], name: 'InitialLiquidityAlreadyProvided', type: 'error' },
  { inputs: [], name: 'InvalidAmount', type: 'error' },
  { inputs: [{ internalType: 'address', name: 'owner', type: 'address' }], name: 'OwnableInvalidOwner', type: 'error' },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
    type: 'error',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'stablecoinAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'desiredStablecoinAmount', type: 'uint256' },
      { internalType: 'uint16', name: 'priceSlippage', type: 'uint16' },
    ],
    name: 'PriceSlipped',
    type: 'error',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'requiredAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'avaliableAmount', type: 'uint256' },
    ],
    name: 'ReserveExceeded',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'initialRoyaltyTokenReserve', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'initialStablecoinReserve', type: 'uint256' },
    ],
    name: 'InitialLiquidityProvided',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'trader', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'royaltyTokenAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'stablecoinAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'updatedRoyaltyTokenReserve', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'updatedStablecoinReserve', type: 'uint256' },
    ],
    name: 'RoyaltyTokenBought',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'trader', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'royaltyTokenAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'stablecoinAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'updatedRoyaltyTokenReserve', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'updatedStablecoinReserve', type: 'uint256' },
    ],
    name: 'RoyaltyTokenSold',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'royaltyTokenAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'desiredStablecoinAmount', type: 'uint256' },
      { internalType: 'uint16', name: 'priceSlippage', type: 'uint16' },
    ],
    name: 'buy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bool', name: 'buyOrSell', type: 'bool' },
      { internalType: 'uint256', name: 'royaltyTokenAmount', type: 'uint256' },
    ],
    name: 'calculateStablecoinAmount',
    outputs: [{ internalType: 'uint256', name: 'stablecoinAmount', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'address', name: 'to', type: 'address' },
    ],
    name: 'collectTradingFeeRevenue',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'initialRoyaltyTokenReserve', type: 'uint256' },
      { internalType: 'uint256', name: 'initialStablecoinReserve', type: 'uint256' },
    ],
    name: 'provideInitialLiquidity',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [],
    name: 'royaltyToken',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'royaltyTokenReserve',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'royaltyTokenAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'desiredStablecoinAmount', type: 'uint256' },
      { internalType: 'uint16', name: 'priceSlippage', type: 'uint16' },
    ],
    name: 'sell',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stablecoin',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stablecoinReserve',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tradingFeeRevenue',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

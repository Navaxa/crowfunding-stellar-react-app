import StellarSDK from 'stellar-sdk';

const api = new StellarSDK.Server('https://horizon-testnet.stellar.org');

export default api;
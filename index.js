// index.js

// Import the Web3 library
const Web3 = require('web3');

// Class for interacting with the Ethereum blockchain using Web3
class Web3Tools {
    /**
     * Constructor to initialize Web3 instance with provider URL and timeout.
     * @param {string} providerUrl - The URL of the Ethereum node provider.
     * @param {number} [timeout=10000] - Timeout value for requests to the provider (in milliseconds).
     */
    constructor(providerUrl, timeout = 10000) {
        // Create a new Web3 instance with the provided provider URL and timeout
        this._web3 = new Web3(providerUrl, { timeout });
    }

    /**
     * Fetches the transaction receipt by transaction hash.
     * @param {string} txHash - The hash of the transaction.
     * @returns {Promise<Object|null>} - A promise that resolves with the transaction receipt object or null if not found.
     */
    async fetchTransactionReceipt(txHash) {
        return this._web3.eth.getTransactionReceipt(txHash);
    }

    /**
     * Fetches block details by block number.
     * @param {number|string} blockNumber - The number or hash of the block.
     * @returns {Promise<Object|null>} - A promise that resolves with the block object or null if not found.
     */
    async fetchBlockDetails(blockNumber) {
        return this._web3.eth.getBlock(blockNumber);
    }

    // Other methods remain the same...
}

// Export the Web3Tools class
module.exports

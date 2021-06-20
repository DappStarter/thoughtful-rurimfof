require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad include process olympic sure'; 
let testAccounts = [
"0x7c80d9877a1aac8006eabfc0689755e88010087cc01ead0b89fb573e49a08f1b",
"0x85e079c7f7ac3c88eae7ec98655f7bbb40e13cb86561b9015c19f4490e3dd3fc",
"0x41313871266b63c9f94ca479a99ea9cfe3b96c5b95d73c3f59156ebb165fdca0",
"0x27a9fb94bb50f6c8d8fa708e86cd082554990695ad70294ad4a46199f63a6794",
"0x0ee17269f9fbd6461621c82dac586c16e9dc4309ba976e44b8beb32f15e7b05c",
"0x12c8cd93a43051ba95fa2c64f38e1c61e7e3298f9451e4c28ad3dad54cec8a81",
"0xcb6fec727de32fd645b30256785fdf1c09bcf387de614506575cd709aef0daad",
"0x49756aaa44dcec6d19e8467e25d0b2cdca0812d2cc7033ca8a7e44f244585ab5",
"0x2cc468d0652642875d9e41daa4765c199703041a86b09550f53f005ce04eb42d",
"0x9ba9d3ea3bed72e75ab579bf735a265d372cb7ca64d71b0bd1a5c285d6482aea"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remind minor guess kite off sleep'; 
let testAccounts = [
"0x3d9c1212020af4e67032c654e349fca503862c867851e6bd35cad511db793f79",
"0x0b4dc860c264609d9225aaa0a0df2247fd3d6e2069690ee8e85cfee0a499d331",
"0x8c95df2986aa1d4127716333d33684603df2d99c18d4dfa7c299b0a79c5510c2",
"0x264895f7ebbb49b9a10a7c7af07c3333d53135c81c5c832d8889c067ab75ead7",
"0x63cd032e91a89dedbe55e24551611be4545841e92e11f8703fe5e1364706363e",
"0x1c68961e85679cbca2eff469ffbdc3f5d9cb869b538b21f22c1e8aa582869c1b",
"0x5d0d83255bf1f62abfa8f2e7bbbd6347d871b038d24f37ffc16db03e1d729540",
"0xed1ce9362e898110a5d5301f1364acbbb6cef718d85ef4ad0c1e69c8ab6bd96a",
"0x1354a4549c8513647b40016da4ed5ae0c0f4777d3aa350bfd00bd2b0eb2c34eb",
"0xb1fab7e8fb11d12fe86efff809f8a7e0a813d586fcdab59391c0d5fd0db59d5c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const compiledFactory = require('./build/CampaignFactory.json');
require('dotenv').config();

console.log(process.env.MNEMONIC);
// Create a provider to give to web3
const provider = new HDWalletProvider(
    process.env.MNEMONIC,
    process.env.INFURIA_RINKEBY
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    // for truffle 0.0.3
    const result = await new web3.eth.Contract(
        JSON.parse(compiledFactory.interface)
    )
        .deploy({ data: compiledFactory.bytecode }) // sets 'what' to deploy
        .send({ gas: '1000000', from: accounts[0] }); // actually **deploy** the app by specifying gas limit and from who

    // // For truffle 0.0.4 -> 0.0.6
    // const result = await new web3.eth.Contract(JSON.parse(interface))
    //     .deploy({ data: '0x' + bytecode }) // add 0x bytecode
    //     .send({ from: accounts[0] }); // remove 'gas'
    console.log('Contract deployed to', result.options.address);
};
deploy();

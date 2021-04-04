import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and metamsk is runnning
    web3 = new Web3(window.web3.currentProvider);
} else {
    // we are onthe server *or* the user is not running metamsak
    const provider = new Web3.providers.HttpProvider(
        process.env.INFURIA_RINKEBY
    );
    web3 = new Web3(provider);
}

export default web3;

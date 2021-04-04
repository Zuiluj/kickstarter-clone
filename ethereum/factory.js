import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x4b1caFd2799f203Db88F97785128D80a3A0c4070'
);

export default instance;

import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const CONTRACT_ADDR =
    process.env.CONTRACT_ADDRESS || process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    CONTRACT_ADDR
);

export default instance;

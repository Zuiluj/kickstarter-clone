import React from 'react';
import { useEffect } from 'react';
import { render } from 'react-dom';

import factory from '../ethereum/factory';

const Index = (props) => {
    return <div> {props.campaigns[0]} </div>;
};

export default Index;

export const getServerSideProps = async (ctx) => {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { props: { campaigns } };
};

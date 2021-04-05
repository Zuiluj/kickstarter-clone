import React from 'react';
import { useEffect } from 'react';
import { render } from 'react-dom';
import { Card, Button } from 'semantic-ui-react';

import factory from '../ethereum/factory';
import Layout from '../components/Layout';

const Index = (props) => {
    const renderCampaigns = () => {
        const items = props.campaigns.map((address) => {
            return {
                header: address,
                description: <a>View Campaigns</a>,
                fluid: true,
            };
        });

        return <Card.Group items={items} />;
    };

    return (
        <Layout>
            <h3> Open Campaigns </h3>
            <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
            />
            {renderCampaigns()}
        </Layout>
    );
};

export default Index;

export const getServerSideProps = async (ctx) => {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { props: { campaigns } };
};

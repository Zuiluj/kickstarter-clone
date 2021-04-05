import React from 'react';
import { useState } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

const CampaignNew = () => {
    const [minimumContribution, setMinimumContribution] = useState(0);
    const [errMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        setErrMsg('');
        setLoading(true);

        try {
            window.ethereum.enable();
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(minimumContribution).send({
                from: accounts[0],
            });
        } catch (err) {
            setErrMsg(err.message);
        }

        setLoading(false);
    };

    return (
        <Layout>
            <h3>Create a Campaign</h3>

            <Form onSubmit={onSubmit} error={!!errMsg}>
                <Form.Field>
                    <label> Minimum Contribution</label>
                    <Input
                        label="wei"
                        labelPosition="right"
                        value={minimumContribution}
                        type="number"
                        onChange={(e) => setMinimumContribution(e.target.value)}
                    />
                </Form.Field>

                <Message error header="Oops!" content={errMsg} />
                <Button primary loading={loading}>
                    Create!
                </Button>
            </Form>
        </Layout>
    );
};

export default CampaignNew;

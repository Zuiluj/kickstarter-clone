import React, { useState } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';

import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

const ContributeForm = (props) => {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrMsg('');
        const campaign = Campaign(props.address);

        try {
            window.ethereum.enable();
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(value, 'ether'),
            });

            // refresh the page
            Router.replaceRoute(`/campaigns/${props.address}`);
        } catch (err) {
            setErrMsg(err.message);
        }

        setLoading(false);
        setValue('');
    };

    return (
        <Form onSubmit={onSubmit} error={!!errMsg}>
            <Form.Field>
                <label>Amount to Contribute</label>
                <Input
                    value={value}
                    label="ether"
                    labelPosition="right"
                    onChange={(e) => setValue(e.target.value)}
                    type="number"
                />
            </Form.Field>

            <Message error header="Oops!" content={errMsg} />
            <Button loading={loading} primary>
                Contribute!
            </Button>
        </Form>
    );
};

export default ContributeForm;

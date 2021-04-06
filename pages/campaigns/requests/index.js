import React from 'react';
import { Button } from 'semantic-ui-react';

import Layout from '../../../components/Layout';
import { Link } from '../../../routes';

const IndexPage = (props) => {
    return (
        <Layout>
            <h3> Requests </h3>
            <Link route={`/campaigns/${props.address}/requests/new`}>
                <a>
                    <Button primary> Add Request </Button>
                </a>
            </Link>
        </Layout>
    );
};

export default IndexPage;

export const getServerSideProps = async (props) => {
    const { address } = props.query;

    return {
        props: { address },
    };
};

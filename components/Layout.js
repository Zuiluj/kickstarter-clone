import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';

import Header from './Header';

export default (props) => {
    return (
        <div>
            <Container>
                <Head>
                    <link
                        async
                        rel="stylesheet"
                        href="//cdn.jsdelivr.net/npm/semantic-ui@2.0.1/dist/semantic.min.css"
                    />
                </Head>

                <Header />
                {props.children}
            </Container>
        </div>
    );
};

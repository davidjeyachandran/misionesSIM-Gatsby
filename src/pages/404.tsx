
import type { PageProps } from 'gatsby';

// components
import { Container } from '@mui/material';
import Layout from '../components/Layout';

// types
import type { SingleRevista } from '../types/types';
import React from 'react';

type GraphQLResult = {
    allContentfulRevista: {
        nodes: SingleRevista[];
    };
};

const PageNotFound = ({ location }: PageProps<GraphQLResult>) => (
    <Layout location={location}>
        <Container maxWidth='lg'>
            <h1>Page not found</h1>
        </Container>
    </Layout>
);

export default PageNotFound;

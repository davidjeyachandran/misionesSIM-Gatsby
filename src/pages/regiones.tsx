import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

// components
import { Container } from '@mui/material';
import Layout from '../components/Layout';

// types
import type { SingleRevista } from '../types/types';
import RevistaList from '../components/RevistaList';
import SIMMap from '../components/SIMMap';

type GraphQLResult = {
    allContentfulRevista: {
        nodes: SingleRevista[];
    };
};

const Home = ({ location }: PageProps<GraphQLResult>) => (
    <Layout location={location}>
        <Container maxWidth='lg'>
            <h1>Regiones</h1>
            <SIMMap />
        </Container>
    </Layout>
);

export default Home;

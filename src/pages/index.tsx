import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

// components
import { Container } from '@mui/material';
import Layout from '../components/Layout';

// types
import type { SingleRevista } from '../types/types';
import RevistaList from '../components/RevistaList';
import { StaticImage } from 'gatsby-plugin-image';

type GraphQLResult = {
  allContentfulRevista: {
    nodes: SingleRevista[];
  };
};

const Home = ({ location }: PageProps<GraphQLResult>) => (
  <Layout location={location}>
       <Container maxWidth={false}>
        People
        <StaticImage 
          alt='Header image of group of people'
          src='../assets/slider1.jpg'
          placeholder="blurred"
          layout='fullWidth'
        />
    </Container>
    <Container maxWidth='lg'>
      <h1>Home</h1>
    </Container>
  </Layout>
);

export default Home;

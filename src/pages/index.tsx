import React, { useState, useEffect, ChangeEvent } from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

// components
import { Container, TextField } from '@mui/material';
import Layout from '../components/Layout';

// types
import type { SingleRevista } from '../types/types';
import RevistaList from '../components/RevistaList';

type GraphQLResult = {
  allContentfulRevista: {
    nodes: SingleRevista[];
  };
};

const Home = ({ location }: PageProps<GraphQLResult>) => (
  <Layout location={location}>
    <Container maxWidth='lg'>
      <h1>Home</h1>
    </Container>
  </Layout>
);

export default Home;

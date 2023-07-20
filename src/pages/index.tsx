import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import VideoWrapper from '../components/VideoWrapper'

// components
import { Container, Grid, TableRow, Typography } from '@mui/material';
import Layout from '../components/Layout';

// types
import type { SingleRevista } from '../types/types';
import RevistaList from '../components/RevistaList';
import { StaticImage } from 'gatsby-plugin-image';
import SIMMap from '../components/SIMMap';

type GraphQLResult = {
  allContentfulRevista: {
    nodes: SingleRevista[];
  };
};

const Home = ({ location }: PageProps<GraphQLResult>) => (
  <Layout location={location}>
    <Container maxWidth={false}>
      <StaticImage
        alt='Header image of group of people'
        src='../assets/slider1.jpg'
        placeholder="blurred"
        layout='fullWidth'
      />
    </Container>
    <Container maxWidth='lg'>
      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item xs={6} sx={{ p: 2 }}>
          <h2>Acerca de SIM</h2>
          <Typography sx={{ fontSize: '1.1em' }}>SIM es una misión con enfoque general. Apreciamos y trabajamos, de manera muy cercana, con agencias especializadas en la traducción de la Biblia, de alcance radial, desarrollo en comunidades, medicina, ministerios de HIV y SIDA, y aviación. Sin embargo, lo que nos distingue es nuestro interés en la Iglesia. Muchos de nuestros misioneros trabajan en la fundación de iglesias en áreas pioneras o de forma asociada en iglesias locales en los ministerios de discipulado, evangelismo o educación teológica.</Typography>
        </Grid>

        <Grid item xs={6}>
          <VideoWrapper>
            <iframe
              src="https://www.youtube.com/embed/YIIw-r8ZYAY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
            </iframe>
          </VideoWrapper>
        </Grid>
      </Grid>
      <SIMMap />
    </Container>
  </Layout>
);

export default Home;

import React from 'react';
import type { PageProps } from 'gatsby';
import VideoWrapper from '../components/VideoWrapper'

// components
import { Container, Grid, Typography } from '@mui/material';
import Layout from '../components/Layout';

// types
import type { SingleRevista } from '../types/types';
import RevistaList from '../components/RevistaList';
import { StaticImage } from 'gatsby-plugin-image';
import SIMMap from '../components/SIMMap';
import YouTubeFrame from '../components/YoutubeFrame/YouTubeFrame';

type GraphQLResult = {
  allContentfulRevista: {
    nodes: SingleRevista[];
  };
};

const Home = ({ location }: PageProps<GraphQLResult>) => (
  <Layout location={location}>
    <StaticImage
      alt='Header image of group of people'
      src='../assets/slider1.jpg'
      placeholder="blurred"
      layout='fullWidth'
    />
    <Container maxWidth='lg'>
      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item xs={12} lg={6} sx={{ p: 2 }}>
          <h2>Acerca de SIM</h2>
          <Typography sx={{ fontSize: '1.1em' }}>SIM es una misión con enfoque general. Apreciamos y trabajamos, de manera muy cercana, con agencias especializadas en la traducción de la Biblia, de alcance radial, desarrollo en comunidades, medicina, ministerios de HIV y SIDA, y aviación. Sin embargo, lo que nos distingue es nuestro interés en la Iglesia. Muchos de nuestros misioneros trabajan en la fundación de iglesias en áreas pioneras o de forma asociada en iglesias locales en los ministerios de discipulado, evangelismo o educación teológica.</Typography>
        </Grid>

        <Grid item xs={12} lg={6}>
          <VideoWrapper>
            <YouTubeFrame title='Qué es SIM' video='YIIw-r8ZYAY' width={'500'} height='320' thumbnailQuality={'mqdefault'} />

          </VideoWrapper>
        </Grid>
      </Grid>
      <SIMMap />
    </Container>
  </Layout>
);

export default Home;

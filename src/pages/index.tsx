import React from 'react';
import { Link, type PageProps } from 'gatsby';

// components
import { Container, Grid, Typography } from '@mui/material';
import Layout from '../components/Layout';

// types
import type { SingleRevista } from '../types/types';
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
      <Grid container spacing={2} sx={{ py: 6 }}>

        <Grid item xs={12} lg={6} sx={{ p: 2 }}>
          <Typography component='h2' variant='h3'>Acerca de SIM</Typography>
          <Typography sx={{ fontSize: '1.1em' }}>SIM es una misión con enfoque general. Apreciamos y trabajamos, de manera muy cercana, con agencias especializadas en la traducción de la Biblia, de alcance radial, desarrollo en comunidades, medicina, ministerios de HIV y SIDA, y aviación. Sin embargo, lo que nos distingue es nuestro interés en la Iglesia. Muchos de nuestros misioneros trabajan en la fundación de iglesias en áreas pioneras o de forma asociada en iglesias locales en los ministerios de discipulado, evangelismo o educación teológica.</Typography>
        </Grid>

        <Grid item xs={12} lg={6}>
          <YouTubeFrame title='Qué es SIM' video='YIIw-r8ZYAY' width={'500'} height='320' thumbnailQuality={'hqdefault'} />
        </Grid>
      </Grid>
    </Container>

    <Container maxWidth='lg'>
      <Grid container spacing={2} sx={{ py: 6 }}>
        <Grid item xs={12} lg={4}>
          <Link to='/sirve-con-nosotros'>
            <Typography component='h3' variant='h4'>Sirve Con Nosotros</Typography>
            <StaticImage
              alt='Header image of group of people'
              src='../assets/servir.jpg'
              placeholder="blurred"
              layout='fullWidth'
            />
          </Link>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Link to='/ora-con-nosotros'>
            <Typography component='h3' variant='h4'>Ora con nosotros</Typography>
            <StaticImage
              alt='Header image of group of people'
              src='../assets/orar.jpg'
              placeholder="blurred"
              layout='fullWidth'
            />
          </Link>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Link to='/da-la-obra'>
            <Typography component='h3' variant='h4'>Da a la obra</Typography>
            <StaticImage
              alt='Header image of group of people'
              src='../assets/dar.jpg'
              placeholder="blurred"
              layout='fullWidth'
            />
          </Link>
        </Grid>

      </Grid>
    </Container>

    <Container maxWidth={false} sx={{ backgroundColor: '#efefef' }}>
      <Container maxWidth='lg' sx={{ pt: 4 }}>
        <Typography component='h2' variant='h3'>¿Dónde Trabajamos?</Typography>

        <Grid container spacing={2} sx={{ backgroundColor: '#efefef' }}>
          <Grid item xs={12} lg={9}>
            <SIMMap />
          </Grid>

          <Grid item xs={12} lg={3}>
            <Grid container spacing={2} sx={{ color: 'primary.main' }}>

              <Grid item xs={12} lg={6}>
                <Typography variant='h4' component='p'>70+<br />
                  Paises</Typography>
                <br /><br />
                <Typography variant='h4' component='p'>4000+<br />
                  Obreros</Typography>
              </Grid>

              <Grid item xs={12} lg={6}>
                <Typography variant='h4' component='p'>60+<br />
                  Nacionalidades</Typography>
              </Grid>

            </Grid>
          </Grid>
        </Grid>

      </Container>
    </Container>


  </Layout >
);

export default Home;

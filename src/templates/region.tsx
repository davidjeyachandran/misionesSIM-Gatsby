import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import { get } from 'lodash-es';
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Box, Container, Grid } from '@mui/material';
import { BLOCKS, MARKS } from '../constants';

// components
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

// types
import type { NextPrevious, SingleRegion } from '../types/types';
import RevistaCard from '../components/RevistaCard';

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => <p>{children}</p>,
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
      <>
        <h2>Embedded Asset</h2>
        <pre>
          <code>{JSON.stringify(node, null, 2)}</code>
        </pre>
      </>
    ),
  },
};

type GraphQLResult = {
  contentfulRegion: SingleRegion;
  next: NextPrevious;
  previous: NextPrevious;
};

const RegionTemplate = ({ data, location }: PageProps<GraphQLResult>) => {
  const post = data.contentfulRegion;
  const { title, body, map } = post;
  const img = get(post, 'heroImage.gatsbyImageData.images.sources[0].srcSet');

  console.log(post);

  return (
    <Layout location={location}>
      <Seo title={post.title} />
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item md={8}>
            <Hero title={post.title} />
            <img width='100%' srcSet={img} alt={title} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default RegionTemplate;

export const pageQuery = graphql`
query BlogQuery($slug: String!) {
	contentfulRegion(slug: { eq: $slug}) {
    id
		title
      heroImage {
		gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 424, height: 212)
      }
      map {
		gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 424, height: 212)
      }
      body {
		raw
      }
      slug
    }
}

`;

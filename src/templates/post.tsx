import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import { get } from 'lodash-es';
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Container, Grid } from '@mui/material';
import { BLOCKS, MARKS } from '../constants';

// components
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

// types
import type { NextPrevious, SinglePost } from '../types/types';
import { GatsbyImage } from 'gatsby-plugin-image';

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
  contentfulPost: SinglePost;
  next: NextPrevious;
  previous: NextPrevious;
};

// @TODO - need to do this

const PostTemplate = ({ data, location }: PageProps<GraphQLResult>) => {
  const post = data.contentfulPost;
  const { title, body } = post;
  // console.log(post);

  const richTextData = {
    raw: body.raw,
    references: [],
  };

  return (
    <Layout location={location}>
      <Seo title={post.title} />
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item md={8}>
            <Hero title={post.title} />
            <GatsbyImage image={post?.heroImage?.gatsbyImageData} alt={title} />
            {body && renderRichText(richTextData, options)}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
query BlogQuery($slug: String!) {
	contentfulPost(slug: { eq: $slug}) {
    id
    slug
		title
    body {
      raw
    }
  }
}

`;

import React from 'react';
import { Link, graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import { get } from 'lodash-es';

// components
import { Button } from '@mui/material';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

// styled components
import * as S from './styles';
import { Container } from '../components/UI/Container';

// types
import type { NextPrevious, SingleBlog } from '../types/types';

type GraphQLResult = {
	contentfulBlogPost: SingleBlog;
	next: NextPrevious;
	previous: NextPrevious;
};

const RevistaTemplate = ({ data, location }: PageProps<GraphQLResult>) => {
	const post = data.contentfulBlogPost;
	const { previous } = data;
	const { next } = data;
	const downloadLink = get(post, 'revistaPDF.file.url');

	// console.log(post);

	return (
		<Layout location={location}>
			<Seo title={post.title} />

			<Hero
				title={post.title}
			/>
		</Layout>
	);
};

export default RevistaTemplate;

export const pageQuery = graphql`
query BlogQuery {
  contentfulBlogPost {
    id
    nid
    publishDate
    slug
    title
    updatedAt
    body {
      raw
    }
  }
}

`;

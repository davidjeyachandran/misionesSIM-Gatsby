import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import { get } from 'lodash-es';

// components
import { Container, Button } from '@mui/material';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import type { NextPrevious, SingleBlog, SingleRevista } from '../types/types';
import Revista from '../components/Revista';

type GraphQLResult = {
	contentfulRevista: SingleRevista;
	next: NextPrevious;
	previous: NextPrevious;
	allContentfulBlogPost: {
		nodes: SingleBlog[];
	}
};

const RevistaTemplate = ({ data, location }: PageProps<GraphQLResult>) => {
	const blogPosts = data.allContentfulBlogPost.nodes;
	const post = data.contentfulRevista;
	const { previous } = data;
	const { next } = data;
	const { title } = post;

	return (
		<Layout location={location}>
			<Seo title={title} />
			<Container maxWidth='lg'>
				<Link to='/revistavamos' rel='back'>
					<Button variant="text" sx={{ mt: 2 }} startIcon={<ArrowBackIosNewIcon />}>Todas Revistas</Button>
				</Link>

				<Revista post={post} blogPosts={blogPosts} previous={previous} next={next} />
			</Container>
		</Layout >
	);
};

export default RevistaTemplate;

export const pageQuery = graphql`
	query RevistaBySlug($slug: String!, $id:String!, $previousPostSlug: String, $nextPostSlug: String) {
		contentfulRevista(slug: { eq: $slug }) {
			id
			slug
			title
			fecha(formatString: "MMMM Do, YYYY")
			rawDate: fecha
			coverImage {
				gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
				resize(height: 630, width: 1200) {
					src
				}
			}
			inDesignID
			revistaPDF {
				file {
				url
				}
			}
			body {
				raw
			}
		}
		previous: contentfulRevista(slug: { eq: $previousPostSlug }) {
			slug
			title
		}
		next: contentfulRevista(slug: { eq: $nextPostSlug }) {
			slug
			title
		}
		allContentfulBlogPost(filter: { revista: { id: { eq: $id } } }) {
			nodes {
			id
			slug
			title
			createdAt
			description {
				description
			}
			publishDate(formatString: "MMMM Do, YYYY")
			heroImage {
					gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 424, height: 212)
				}
        	}
      	}
	}
`;

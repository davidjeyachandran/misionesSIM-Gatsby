import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import { Container, Grid } from '@mui/material';
import { get } from 'lodash-es';
import Layout from '../components/Layout';

import type { SingleBlog } from '../types/types';
import BlogCard from '../components/BlogCard';

type GraphQLResult = {
	allContentfulBlogPost: {
		nodes: SingleBlog[];
	}
}

const BlogList = ({ data, location }: PageProps<GraphQLResult>) => {
	const posts = data.allContentfulBlogPost.nodes;

	return (
		<Layout location={location}>
			<Container maxWidth='lg'>
				<h1>Blogs</h1>
				<Grid container>
					{posts.slice(0, 20).map((item) => {
						const img = get(item, 'heroImage.gatsbyImageData.images.sources[0].srcSet', '');
						const slug = get(item, 'slug');
						return <BlogCard key={slug} title={item?.title} img={img} slug={slug} />;
					})}

				</Grid>
			</Container>
		</Layout>
	);
};

export default BlogList;

export const pageQuery = graphql`
	query BlogListQuery {
		allContentfulBlogPost(filter: {node_locale: {eq: "en-US"}}, sort: { fields: [publishDate], order: DESC }) {
			nodes {
				id
				body {
					raw
				}
				title
				slug
				publishDate(formatString: "MMMM Do, YYYY")
				heroImage {
					gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 424, height: 212)
				}

			}
		}
	}
`;

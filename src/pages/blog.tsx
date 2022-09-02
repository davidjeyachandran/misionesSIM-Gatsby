import React from 'react'
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import { DataGrid } from '@mui/x-data-grid';

import { Box, Container } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import Layout from '../components/Layout';

import type { SingleBlog } from '../types/types';
import { isTemplateExpression } from 'typescript';
import { iteratee } from 'lodash-es';

type GraphQLResult = {
	allContentfulBlogPost: {
		nodes: SingleBlog[];
	}
}

const BlogList = ({ data, location }: PageProps<GraphQLResult>) => {
	const posts = data.allContentfulBlogPost.nodes

	// const rows = posts.map(item => {...item, isBody: item.body !== '' ? <DoneIcon /> : ''})
	// 		.filter((item) => item.heroImage.gatsbyImageData.images.fallback.src)
	// console.log(posts);

	const columns = [{
		field: 'title',
		headerName: 'Title',
		width: 500
	},
	{ field: 'publishDate', width: 200 }];

	return (
		<Layout location={location}>
			<Container maxWidth='lg'>
				<h1>Blogs</h1>
				<Box sx={{ height: 800, width: '100%' }}>
					<DataGrid
						rows={posts}
						columns={columns}
						pageSize={50}
					/>
				</Box>
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

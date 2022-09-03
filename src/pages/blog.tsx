import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import { DataGrid } from '@mui/x-data-grid';

import { Box, Container } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { isTemplateExpression } from 'typescript';
import { get, iteratee } from 'lodash-es';
import Layout from '../components/Layout';

import type { SingleBlog } from '../types/types';

type GraphQLResult = {
	allContentfulBlogPost: {
		nodes: SingleBlog[];
	}
}

const BlogList = ({ data, location }: PageProps<GraphQLResult>) => {
	const posts = data.allContentfulBlogPost.nodes;

	const rows = posts.map((item) => {
		const img = get(item, 'heroImage.gatsbyImageData.images.sources[0].srcSet', null);
		const slug = get(item, 'slug');
		// console.log(img);

		return { ...item, isImg: img !== null ? "yes" : 'no', slug };
});
	// console.log(posts);

	const columns = [{
		field: 'title',
		headerName: 'Title',
		width: 450
	},
	{ field: 'publishDate', width: 160 },
	{ field: 'isImg', width: 50 },
	{ field: 'slug', width: 350 }
];

	return (
		<Layout location={location}>
			<Container maxWidth='lg'>
				<h1>Blogs</h1>
				<Box sx={{ height: 800, width: '100%' }}>
					<DataGrid
						rows={rows}
						columns={columns}
						pageSize={100}
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

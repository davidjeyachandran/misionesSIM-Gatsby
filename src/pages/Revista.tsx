import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

// components
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

// types
import type { SingleRevista } from '../types/types';

type GraphQLResult = {
	allContentfulRevista: {
		nodes: SingleRevista[];
	};
};

const RevistaIndex = ({ data, location }: PageProps<GraphQLResult>) => {
	const posts = data.allContentfulRevista.nodes;

	console.log(posts);

	return (
		<Layout location={location}>
			<Seo title='Revista' />
			<Hero title='Revista' />
			{/* <ArticlePreview posts={posts} /> */}
		</Layout>
	);
};

export default RevistaIndex;

export const pageQuery = graphql`
	query RevistaIndexQuery {
		allContentfulRevista(sort: { fields: [fecha], order: DESC }) {
			nodes {
				title
				slug
				fecha(formatString: "MMMM Do, YYYY")
				coverImage {
					gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 424, height: 212)
				}
			}
		}
	}
`;

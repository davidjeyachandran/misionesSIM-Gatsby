import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

// components
import { title } from 'process';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Layout from '../components/Layout';

// types
import type { Revista } from '../types/types';
import RevistaCard from '../components/RevistaCard';

type GraphQLResult = {
	allContentfulRevista: {
		nodes: Revista[];
	};
};

const Home = ({ data, location }: PageProps<GraphQLResult>) => {
	const posts = data.allContentfulRevista.nodes;

	return (
		<Layout location={location}>
			<Container maxWidth='lg'>
				<Grid container spacing={2}>
					{posts.map((revista) => {
				const coverImage = revista.coverImage?.gatsbyImageData.images.fallback.src || '';

				const { title: titleRevista, fecha, slug } = revista;
				return (
					<Grid item>
						<RevistaCard
							key={slug}
							title={titleRevista}
							img={coverImage}
							subTitle={fecha}
							slug={slug}
						/>
					</Grid>
);
			})}
				</Grid>
			</Container>
		</Layout>
	);
};

export default Home;

export const pageQuery = graphql`
	query HomeQuery {
		allContentfulRevista(filter: {node_locale: {eq: "en-US"}}, sort: { fields: [fecha], order: DESC }) {
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

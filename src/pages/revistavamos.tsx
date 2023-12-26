import React, { useState, useEffect, ChangeEvent } from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

// components
import { Container, TextField } from '@mui/material';
import Layout from '../components/Layout';

// types
import type { SingleRevista } from '../types/types';
import RevistaList from '../components/RevistaList';
import RevistaCurrent from '../components/RevistaCurrent';

type GraphQLResult = {
	allContentfulRevista: {
		nodes: SingleRevista[];
	};
};

const RevistaVamos = ({ data, location }: PageProps<GraphQLResult>) => {
	const posts = data.allContentfulRevista.nodes;
	const [search, setSearch] = useState('');
	const [filteredPosts, setFilteredPosts] = useState<SingleRevista[]>(posts);

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		const searchValue = event.target.value;
		setSearch(searchValue);

		const filtered = searchValue === ''
			? posts
			: posts.filter(
				(item) => item.title.toLowerCase().includes(searchValue.toLowerCase())
			)
		setFilteredPosts(filtered.slice(1));
	};

	useEffect(() => {

	}, [posts]);

	return (
		<Layout location={location}>
			<Container maxWidth='lg'>
				<RevistaCurrent post={posts?.length > 0 ? posts[0] : null} />
				<TextField
					id='outlined-basic'
					label='Buscar...'
					variant='outlined'
					value={search}
					onChange={handleSearchChange}
					sx={{ my: 2, textAlign: 'center', width: 300 }}
				/>
				<RevistaList posts={filteredPosts} />
			</Container>
		</Layout>
	);
};

export default RevistaVamos;

export const pageQuery = graphql`
	query RevistaIndexQuery {
		allContentfulRevista(filter: {node_locale: {eq: "en-US"}}, sort: {fecha: DESC}) {
			nodes {
			id
			title
			slug
			fecha(formatString: "MMMM Do, YYYY")
			coverImage {
				gatsbyImageData(
				layout: FULL_WIDTH
				placeholder: BLURRED
				width: 424
				height: 212
				)
			}
			}
		}
	}
`;

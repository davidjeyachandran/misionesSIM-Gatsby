import React, { useState, useEffect, ChangeEvent } from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

// components
import { Button, Container, TextField, Typography } from '@mui/material';
import Layout from '../components/Layout';
import type { SingleRevista } from '../types/types';
import RevistaList from '../components/RevistaList';
import RevistaCurrent from '../components/RevistaCurrent';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

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

		setFilteredPosts(filtered);
	};

	const handleClear = () => {
		setSearch('');
		setFilteredPosts(posts);
	};

	useEffect(() => {

	}, [posts]);

	return (
		<Layout location={location}>
			<Container maxWidth='lg'>
				<RevistaCurrent post={posts?.length > 0 ? posts[0] : null} />

				<Button variant='contained' sx={{ my: 3, px: 4 }}>
					Suscríbete
				</Button>

				<hr />
				<Typography component='h2' variant='h3' sx={{ my: 3 }}>Ediciones Anteriores</Typography>

				<TextField
					id='outlined-basic'
					label='Buscar Revista'
					variant='outlined'
					value={search}
					onChange={handleSearchChange}
					sx={{ my: 2, textAlign: 'center', width: 300 }}
					InputProps={{
						endAdornment: search && (
							<IconButton onClick={handleClear} edge="end">
								<ClearIcon />
							</IconButton>
						),
					}}
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
				gatsbyImageData(placeholder: BLURRED, width: 330, aspectRatio: 0.7069)
			}
			}
		}
	}
`;

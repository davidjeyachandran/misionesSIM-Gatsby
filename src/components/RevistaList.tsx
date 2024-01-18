import React from 'react';
import { Grid } from '@mui/material';
import RevistaCard from '../components/RevistaCard';
import type { SingleRevista } from '../types/types';

type RevistaListProps = {
	posts: SingleRevista[]
}

const RevistaList = ({ posts }: RevistaListProps) => (
	<Grid
		container
		spacing={4}
		direction='row'
		alignItems='center'
		justifyContent='space-between'
	>
		{posts.map((revista: SingleRevista) => {

			const { id, title: titleRevista, coverImage, fecha, slug } = revista;
			return (
				<Grid item xs={12} md={3} key={id} sx={{ m: 0 }}>
					<RevistaCard
						title={titleRevista}
						img={coverImage}
						date={fecha}
						slug={slug}
						height={370}
					/>
				</Grid>
			);
		})}
	</Grid>
);

export default RevistaList;

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
		spacing={2}
		bgcolor='#eee'
		direction='row'
		alignItems='center'
		justifyContent='center'
	>
		{posts.map((revista: SingleRevista) => {

			const { id, title: titleRevista, coverImage, fecha, slug } = revista;
			return (
				<Grid item key={id}>
					<RevistaCard
						title={titleRevista}
						img={coverImage}
						date={fecha}
						slug={slug}
					/>
				</Grid>
			);
		})}
	</Grid>
);

export default RevistaList;

import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'gatsby';
import { Box, Grid } from '@mui/material';

type CardProps = {
	title: string;
	img: string;
	slug: string
}

const BlogCard = ({ title, img, slug }: CardProps) => (
	<Grid item md={6}>
		<Link to={slug}>
			<Box height='345px' sx={{ overflow: 'hidden' }}>
				<img
					srcSet={img}
					alt={title}
				/>
			</Box>

			<Typography gutterBottom variant='h6' component='div' sx={{ minHeight: 40, lineHeight: 1.2 }}>
				{title}
			</Typography>

		</Link>
	</Grid>
);

export default BlogCard;

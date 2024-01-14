import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'gatsby';
import { Card, CardContent, CardHeader, CardMedia, Grid } from '@mui/material';
import { removeLeadingSlash } from '../utils';
import { GatsbyImage } from 'gatsby-plugin-image';

type CardProps = {
	title: string;
	date: string
	img: any;
	slug: string
	description: string;
}

const BlogCard = ({ title, date, img, slug, description }: CardProps) => (
	<Grid container sx={{ mb: 6 }}>
		<Grid item xs={12} md={4} sx={{ pr: 2 }}>
			<Link to={`/blog/${removeLeadingSlash(slug)}`}>
				<GatsbyImage image={img?.gatsbyImageData} alt={title} />
			</Link>
		</Grid>
		<Grid item xs={12} md={8}>
			<Link to={`/blog/${removeLeadingSlash(slug)}`}>
				<Typography component='h2' variant='h6' sx={{ mb: 0.5, lineHeight: 1.4 }}>{title}</Typography>
				<Typography color="text.secondary">
					{description}
				</Typography>
			</Link>
		</Grid>

	</Grid>
);

export default BlogCard;

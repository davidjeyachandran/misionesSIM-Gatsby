import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'gatsby';
import { Box, Card, CardContent, CardHeader, CardMedia, Grid } from '@mui/material';

type CardProps = {
	title: string;
	img: string;
	slug: string
	description: string;
}

const BlogCard = ({ title, img, slug, description }: CardProps) => (

	<Link to={`/blog/${slug}`}>
		<Card sx={{ maxWidth: 345, m: 2 }}>
			<CardHeader
				title={title}
				subheader="September 14, 2016"
			/>
			<CardMedia
				component="img"
				height="194"
				srcSet={img}
				alt={title}
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
		</Card>
	</Link>

);

export default BlogCard;

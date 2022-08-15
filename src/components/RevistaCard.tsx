import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'gatsby';

type CardProps = {
	title: string;
	subTitle: string;
	img: string;
	slug: string
}

const RevistaCard = ({ title, subTitle, img, slug }: CardProps) => (
	<Card sx={{ width: 275 }}>
		<Link to={slug}>
			<CardMedia
				component='img'
				height='390'
				image={img}
				alt={title}
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div' sx={{ minHeight: 64 }}>
					{title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{subTitle}
				</Typography>
			</CardContent>
		</Link>
	</Card>
);

export default RevistaCard;

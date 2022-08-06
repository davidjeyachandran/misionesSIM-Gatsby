import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
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
				height='140'
				image={img}
				alt={title}
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{subTitle}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Learn More</Button>
			</CardActions>
		</Link>
	</Card>
	);

export default RevistaCard;

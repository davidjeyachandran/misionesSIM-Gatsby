import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'gatsby';
import { styled } from '@mui/material';

type CardProps = {
	title: string;
	subTitle: string;
	img: string;
	slug: string
}

const CardCustom = styled(Card)(`
	&:hover {
		box-shadow: -1px 10px 29px 0px;
	}	

`)
const CardContentCustom = styled(CardContent)(`
	&:last-child {
		padding-bottom: 16px;
	}
`)

const RevistaCard = ({ title, subTitle, img, slug }: CardProps) => (
	<CardCustom sx={{ width: 275 }}>
		<Link to={`/revistavamos/${slug}`}>
			<CardMedia
				component='img'
				height='390'
				image={img}
				alt={title}
			/>
			<CardContentCustom>
				<Typography gutterBottom variant='h6' component='div' sx={{ minHeight: 40, lineHeight: 1.2 }}>
					{title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{subTitle}
				</Typography>
			</CardContentCustom>
		</Link>
	</CardCustom>
);

export default RevistaCard;

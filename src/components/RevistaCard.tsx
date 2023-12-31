import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'gatsby';
import { styled } from '@mui/material';
import { removeLeadingSlash } from '../utils';
import { GatsbyImage } from 'gatsby-plugin-image';

type CardProps = {
	title: string;
	date: string;
	img?: any;
	height?: number;
	slug: string;
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

const RevistaCard = ({ title, date, img, slug, height }: CardProps) => (
	<CardCustom>
		<Link to={`/revistavamos/${removeLeadingSlash(slug)}`}>
			<CardMedia>
				<GatsbyImage style={{ height }} image={img?.gatsbyImageData} alt={title} />
			</CardMedia>
			<CardContentCustom>
				<Typography gutterBottom variant='h6' component='div' sx={{ minHeight: 40, lineHeight: 1.2 }}>
					{title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{date}
				</Typography>
			</CardContentCustom>
		</Link>
	</CardCustom>
);

export default RevistaCard;

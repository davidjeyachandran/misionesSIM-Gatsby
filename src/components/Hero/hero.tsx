import React from 'react';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

// styled components
import * as S from './styles';
import { Typography } from '@mui/material';

// props
type HeroProps = {
	content?: string;
	image?: IGatsbyImageData;
	title: string;
};

const Hero = ({ content, image, title }: HeroProps) => (
	<>
		{image ? <S.Image alt={title} image={image} /> : null}

		<Typography variant='h4' component='h1' gutterBottom>
			{title}
		</Typography>

		{content ? { content } : null}

	</>
);

export default Hero;

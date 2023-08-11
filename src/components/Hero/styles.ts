import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export const Image = styled(GatsbyImage)`
	/* Ensure golden ratio for the hero size while limiting it to some extend to the viewport width */
	height: 61.8vh;
	max-height: 560px;
	width: 100%;

	@media (min-width: 1024px) {
		margin-left: auto;
		width: 85%;
	}
`;

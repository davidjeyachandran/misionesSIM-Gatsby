import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type Revista = {
	title: string;
	slug: string;
	fecha: string;
	coverImage: {
		gatsbyImageData: IGatsbyImageData;
	};
};

export type SingleRevista = {
	author: {
		name: string;
	};
	body: {
			childMarkdownRemark: {
				html: string;
				timeToRead: number;
			};
	};
	coverImage: {
		gatsbyImageData: IGatsbyImageData;
		resize: {
			src: string;
		};
	};
	fecha: string;
	rawDate: string;
	slug: string;
	title: string;
};

export type NextPrevious = { slug: string; title: string } | null;

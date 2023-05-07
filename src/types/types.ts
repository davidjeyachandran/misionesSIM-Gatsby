import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type SingleBlog = {
	id: string;
	body: {
		childMarkdownRemark: {
			html: string;
			timeToRead: number;
		};
	};
	description: string;
	heroImage: {
		gatsbyImageData: IGatsbyImageData;
		resize: {
			src: string;
		};
	};
	publishDate: string;
	slug: string;
	title: string;
	revista: SingleRevista;
};

export type SingleRevista = {
	id: string;
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

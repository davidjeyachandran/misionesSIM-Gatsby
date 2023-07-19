import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type SingleBlog = {
	id: string;
	body: {
		childMarkdownRemark: {
			html: string;
			timeToRead: number;
		};
	};
	description: {
		description: string;
	}
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
	inDesignID: string | null;
	fecha: string;
	rawDate: string;
	slug: string;
	title: string;
};

export type NextPrevious = { slug: string; title: string } | null;

export type SingleRegion = {
	id: string;
	slug: string;
	title: string;
	body: {
    	raw: any;
		childMarkdownRemark: {
			html: string;
			timeToRead: number;
		};
	};
	heroImage: {
		gatsbyImageData: IGatsbyImageData;
		resize: {
			src: string;
		};
	};
	map: {
		gatsbyImageData: IGatsbyImageData;
		resize: {
			src: string;
		};
	};
};
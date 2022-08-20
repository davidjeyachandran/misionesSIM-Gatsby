import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type Revista = {
	title: string;
	slug: string;
	nid: string;
	publishDate: string;
	coverImage: {
		gatsbyImageData: IGatsbyImageData;
	};
};

export type Blog = {
	title: string;
	slug: string;
	postedDate: string;
	heroImage: {
		gatsbyImageData: IGatsbyImageData;
	};
}

export type SingleBlog = {
	id: string;
	body: {
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
	publishedDate: string;
	slug: string;
	title: string;
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

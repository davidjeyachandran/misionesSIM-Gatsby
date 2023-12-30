import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { ContentfulRichTextGatsbyReference, RenderRichTextData } from 'gatsby-source-contentful/rich-text';

export type SingleBlog = {
	id: string;
	body: RenderRichTextData<ContentfulRichTextGatsbyReference>;
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
	// body: RenderRichTextData<ContentfulRichTextGatsbyReference>;
	body: any;
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
	body: RenderRichTextData<ContentfulRichTextGatsbyReference>;
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
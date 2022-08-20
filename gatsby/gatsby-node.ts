import { resolve } from 'path';
import type { GatsbyNode } from 'gatsby';

type GraphQLResult = {
	allContentfulRevista: {
		nodes: {
			slug: string;
			title: string;
		}[];
	}
	allContentfulBlogPost: {
		nodes: {
			id: string;
			nid: string;
			publishDate: string;
			title: string;
			slug: string;
		}[];
	}
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;

	const revistaTemplate = resolve('./src/templates/revista.tsx');
	const blogTemplate = resolve('./src/templates/blog.tsx');

	const result = await graphql<GraphQLResult>(
		`
		{				
			allContentfulRevista(filter: {node_locale: {eq: "en-US"}}, sort: { fields: [fecha], order: DESC }) {
				nodes {
					id
					title
					slug
					fecha(formatString: "MMMM Do, YYYY")
				}
			}
			allContentfulBlogPost(filter: {node_locale: {eq: "en-US"}}, sort: { fields: [publishDate], order: DESC }) {
				nodes {
					id
					nid
					publishDate(formatString: "MMMM Do, YYYY")
					title
					slug
				}
			}
		}
		`
	);

	if (result.errors) {
		reporter.panicOnBuild(`There was an error loading your Contentful posts`, result.errors);
		return;
	}

	if (!result.data) {
		throw new Error('Failed to get posts.');
	}

	const revistas = result.data.allContentfulRevista.nodes;
	const blogs = result.data.allContentfulBlogPost.nodes;

	if (revistas.length > 0) {
		revistas.forEach((post, index) => {
			const previousPostSlug = index === 0 ? null : revistas[index - 1].slug;
			const nextPostSlug = index === revistas.length - 1 ? null : revistas[index + 1].slug;

			createPage({
				path: `${post.slug}/`,
				component: revistaTemplate,
				context: {
					slug: post.slug,
					title: post.title,
					previousPostSlug,
					nextPostSlug
				}
			});
		});
	}

	if (blogs.length > 0) {
		blogs.forEach((post, index) => {
			const previousPostSlug = index === 0 ? null : blogs[index - 1].slug;
			const nextPostSlug = index === blogs.length - 1 ? null : blogs[index + 1].slug;

			createPage({
				path: `${post.slug}/`,
				component: blogTemplate,
				context: {
					slug: post.slug,
					title: post.title,
					previousPostSlug,
					nextPostSlug
				}
			});
		});
	}
};

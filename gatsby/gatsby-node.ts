import { resolve } from 'path';
import type { GatsbyNode } from 'gatsby';

type GraphQLResult = {
	allContentfulRevista: {
		nodes: {
			slug: string;
			title: string;
		}[];
	};
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;

	const revistaTemplate = resolve('./src/templates/revista.tsx');

	const result = await graphql<GraphQLResult>(
		`
			{
				allContentfulRevista(filter: {node_locale: {eq: "en-US"}}, sort: { fields: [fecha], order: DESC }) {
					nodes 
						id
						title
						slug
						fecha(formatString: "MMMM Do, YYYY")
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
};

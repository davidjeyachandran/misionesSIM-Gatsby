import { resolve } from 'path';
import type { GatsbyNode } from 'gatsby';
import { SingleBlog, SingleRegion, SingleRevista } from '../src/types/types';
import { removeLeadingSlash } from '../src/utils';

type GraphQLResult = {
	allContentfulRevista: {
		nodes: SingleRevista[];
	}
	allContentfulBlogPost: {
		nodes: SingleBlog[];
	}
	allContentfulRegion: {
		nodes: SingleRegion[];
	}
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;

	const revistaTemplate = resolve('./src/templates/revista.tsx');
	const blogTemplate = resolve('./src/templates/blog.tsx');
	const regionTemplate = resolve('./src/templates/region.tsx');

	const result = await graphql<GraphQLResult>(
		`
		{
			allContentfulRevista(filter: {node_locale: {eq: "en-US"}}, sort: {fecha: DESC}) {
			  nodes {
				id
				slug
			  }
			}
			allContentfulBlogPost(
			  filter: {node_locale: {eq: "en-US"}}
			  sort: {publishDate: DESC}
			  limit: 1000
			) {
			  nodes {
				slug
			  }
			}
			allContentfulRegion {
			  nodes {
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
	const regions = result.data.allContentfulRegion.nodes;

	// create Revista pages
	if (revistas.length > 0) {
		revistas.forEach((post, index) => {
			const previousPostSlug = index === 0 ? null : revistas[index - 1].slug;
			const nextPostSlug = index === revistas.length - 1 ? null : revistas[index + 1].slug;
			createPage({
				path: `/revistavamos/${removeLeadingSlash(post.slug)}/`,
				component: revistaTemplate,
				context: {
					id: post.id,
					slug: post.slug,
					previousPostSlug,
					nextPostSlug
				}
			});
		});
	}

	// create Blog pages
	if (blogs.length > 0) {
		blogs.forEach((post, index) => {
			const previousPostSlug = index === 0 ? null : blogs[index - 1].slug;
			const nextPostSlug = index === blogs.length - 1 ? null : blogs[index + 1].slug;

			createPage({
				path: `/blog/${removeLeadingSlash(post.slug)}/`,
				component: blogTemplate,
				context: {
					slug: post.slug,
					previous: previousPostSlug,
					next: nextPostSlug
				}
			});
		});

		// create Blog list pages
		const blogsPerPage = 10
		const numPages = Math.ceil(blogs.length / blogsPerPage)
		Array.from({ length: numPages }).forEach((_, i) => {
			createPage({
				path: i === 0 ? `/blog` : `/blog/${i + 1}`,
				component: resolve('./src/templates/blog-list.tsx'),
				context: {
					limit: blogsPerPage,
					skip: i * blogsPerPage,
					numPages,
					currentPage: i + 1,
				},
			})
		})
	}

	// create Region pages
	if (regions.length > 0) {
		regions.forEach((post, index) => {
			const previousPostSlug = index === 0 ? null : regions[index - 1].slug;
			const nextPostSlug = index === regions.length - 1 ? null : regions[index + 1].slug;

			createPage({
				path: `/regiones/${removeLeadingSlash(post.slug)}/`,
				component: regionTemplate,
				context: {
					slug: post.slug,
					previous: previousPostSlug,
					next: nextPostSlug
				}
			});
		});
	}
};

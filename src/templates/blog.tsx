import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import { get } from 'lodash-es';
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Box, Container, Grid } from '@mui/material';
import { BLOCKS, MARKS } from '../constants';

// components
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

// types
import type { NextPrevious, SingleBlog } from '../types/types';
import RevistaCard from '../components/RevistaCard';

const options = {
	renderMark: {
		[MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
	},
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => <p>{children}</p>,
		[BLOCKS.EMBEDDED_ASSET]: (node: any) => (
			<>
				<h2>Embedded Asset</h2>
				<pre>
					<code>{JSON.stringify(node, null, 2)}</code>
				</pre>
			</>
		),
	},
};

type GraphQLResult = {
	contentfulBlogPost: SingleBlog;
	next: NextPrevious;
	previous: NextPrevious;
};

const BlogTemplate = ({ data, location }: PageProps<GraphQLResult>) => {
	const post = data.contentfulBlogPost;
	const { title, body, revista } = post;
	const img = get(post, 'heroImage.gatsbyImageData.images.sources[0].srcSet');
	const revistaImg = get(revista, 'coverImage.gatsbyImageData.images.fallback.src', '')

	return (
		<Layout location={location}>
			<Seo title={post.title} />
			<Container maxWidth='lg'>
				<Grid container>
					<Grid item md={8}>
						<Hero title={post.title} />
						<img width='100%' srcSet={img} alt={title} />
						{body && renderRichText(body, options)}
					</Grid>
					<Grid md={4} item>
						<Grid container justifyContent="center">
							<Box sx={{ flexDirection: 'column' }}>
								<h2>Revista relacionada</h2><br />
								{revista && (
									<RevistaCard
										title={revista.title}
										subTitle={revista.fecha}
										img={revistaImg}
										slug={revista.slug}
									/>
								)}
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Layout>
	);
};

export default BlogTemplate;

export const pageQuery = graphql`
query BlogQuery($slug: String!) {
  contentfulBlogPost(slug: { eq: $slug}) {
    id
    nid
    publishDate
    slug
    title
    updatedAt
    body {
      raw
    }
	heroImage {
		gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 424, height: 212)
	}
	revista {
		slug
		title
		fecha
		id
		coverImage {
			gatsbyImageData(placeholder: BLURRED, width: 275)
		}
	}
  }
}

`;

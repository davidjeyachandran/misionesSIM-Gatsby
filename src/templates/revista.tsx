import React from 'react';
import { Link, graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import { get } from 'lodash-es';

// components
import { Button } from '@mui/material';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

// styled components
import * as S from './styles';
import { Container } from '../components/UI/Container';

// types
import type { NextPrevious, SingleRevista } from '../types/types';

type GraphQLResult = {
	contentfulRevista: SingleRevista;
	next: NextPrevious;
	previous: NextPrevious;
};

const RevistaTemplate = ({ data, location }: PageProps<GraphQLResult>) => {
	const post = data.contentfulRevista;
	const { previous } = data;
	const { next } = data;
	const downloadLink = get(post, 'revistaPDF.file.url');

	// console.log(post);

	return (
		<Layout location={location}>
			<Seo title={post.title} />

			<Hero
				image={post.coverImage?.gatsbyImageData}
				title={post.title}
			/>

			<Container>
				<S.Meta>
					<time dateTime={post.rawDate}>{post.fecha}</time>
				</S.Meta>

				<S.Article>

					<a href={downloadLink} style={{ textDecoration: 'none' }}>
						<Button variant='outlined'>Download Revista</Button>
					</a>
					{/* <S.Body dangerouslySetInnerHTML={{ __html: post.body?.childMarkdownRemark?.html }} /> */}

					{(previous || next) && (
						<S.Navigation>
							<ul>
								{previous && (
									<li>
										<Link to={`/${previous.slug}`} rel='prev'>
											← {previous.title}
										</Link>
									</li>
								)}
								{next && (
									<li>
										<Link to={`/${next.slug}`} rel='next'>
											{next.title} →
										</Link>
									</li>
								)}
							</ul>
						</S.Navigation>
					)}
				</S.Article>
			</Container>
		</Layout>
	);
};

export default RevistaTemplate;

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!, $previousPostSlug: String, $nextPostSlug: String) {
		contentfulRevista(slug: { eq: $slug }) {
			slug
			title
			fecha(formatString: "MMMM Do, YYYY")
			rawDate: fecha
			coverImage {
				gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
				resize(height: 630, width: 1200) {
					src
				}
			}
			revistaPDF {
        file {
          url
        }
      }
			body {
				raw
			}
		}
		previous: contentfulRevista(slug: { eq: $previousPostSlug }) {
			slug
			title
		}
		next: contentfulRevista(slug: { eq: $nextPostSlug }) {
			slug
			title
		}
	}
`;

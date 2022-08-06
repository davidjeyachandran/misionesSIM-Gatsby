import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

// components

// styled components
import * as S from './styles';
import { Container } from '../UI/Container';

// types
import type { Revista } from '../../types/types';

// props
type ArticlePreviewProps = {
	posts: Revista[];
};

const ArticlePreview = ({ posts }: ArticlePreviewProps) => {
	if (!posts || !Array.isArray(posts)) return null;

	return (
		<Container>
			<S.ArticleList>
				{posts.map((post) => (
					<li key={post.slug}>
						<S.StyledLink to={`/${post.slug}`}>
							<GatsbyImage alt='' image={post.coverImage.gatsbyImageData} />
							<S.Title>{post.title}</S.Title>
						</S.StyledLink>

						{/* <div dangerouslySetInnerHTML={{ __html: post.description.childMarkdownRemark.html }} /> */}

						<S.Meta>
							<small>{post.fecha}</small>

						</S.Meta>
					</li>
				))}
			</S.ArticleList>
		</Container>
	);
};

export default ArticlePreview;

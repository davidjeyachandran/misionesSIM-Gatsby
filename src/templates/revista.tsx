import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import { get } from 'lodash-es';

// components
import { Box, Button, Grid, Modal, Typography } from '@mui/material';
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

const styleModal = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	margin: '0 auto',
	width: '90%',
	height: '90%',
	bgcolor: 'background.paper',
	border: '1px solid #000',
	boxShadow: 24,
	p: 4,
	textAlign: 'center'
};

const RevistaTemplate = ({ data, location }: PageProps<GraphQLResult>) => {
	const post = data.contentfulRevista;
	const { previous } = data;
	const { next } = data;
	const [open, setOpen] = useState(false);
	const downloadLink = get(post, 'revistaPDF.file.url');

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const { title, coverImage, fecha, rawDate, inDesignID } = post;
	console.log(post);

	return (
		<Layout location={location}>
			<Seo title={title} />

			<Hero
				image={coverImage?.gatsbyImageData}
				title={title}
			/>

			<Container>
				<S.Meta>
					<time dateTime={rawDate}>{fecha}</time>
				</S.Meta>

				<S.Article>

					<a href={downloadLink} style={{ textDecoration: 'none' }}>
						<Button variant='outlined'>Download Revista</Button>
					</a>
					{/* <S.Body dangerouslySetInnerHTML={{ __html: post.body?.childMarkdownRemark?.html }} /> */}
					{inDesignID ? (<Button onClick={handleOpen}>Leer Revista online</Button>) : ''}

					{(previous || next) && (
						<S.Navigation>
							<ul>
								{previous && (
									<li>
										<Link to={`/revistavamos/${previous.slug}`} rel='prev'>
											← {previous.title}
										</Link>
									</li>
								)}
								{next && (
									<li>
										<Link to={`/revistavamos/${next.slug}`} rel='next'>
											{next.title} →
										</Link>
									</li>
								)}
							</ul>
						</S.Navigation>
					)}
				</S.Article>

				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={styleModal}>
						{inDesignID && <iframe src={inDesignID} width="100%" height="90%" allowFullScreen></iframe>}
						<Button sx={{ margin: '0 auto', textAlign: 'center' }} onClick={handleClose}>Cerrar</Button>
					</Box>
				</Modal>

			</Container>
		</Layout>
	);
};

export default RevistaTemplate;

export const pageQuery = graphql`
	query RevistaBySlug($slug: String!, $previousPostSlug: String, $nextPostSlug: String) {
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
			inDesignID
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

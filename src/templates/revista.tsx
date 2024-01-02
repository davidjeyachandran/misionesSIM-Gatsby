import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import { get } from 'lodash-es';

// components
import { Container, Box, Button, Modal, Grid, Typography } from '@mui/material';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import RelatedBlogs from '../components/RelatedBlogs';
import PreviousNext from '../components/PreviousNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import RevistaCard from '../components/RevistaCard';

// types
import type { NextPrevious, SingleBlog, SingleRevista } from '../types/types';

type GraphQLResult = {
	contentfulRevista: SingleRevista;
	next: NextPrevious;
	previous: NextPrevious;
	allContentfulBlogPost: {
		nodes: SingleBlog[];
	}
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
	const blogPosts = data.allContentfulBlogPost.nodes;
	const post = data.contentfulRevista;
	const { previous } = data;
	const { next } = data;
	const [open, setOpen] = useState(false);
	const downloadLink = get(post, 'revistaPDF.file.url');

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const { id, title, coverImage, fecha, rawDate, inDesignID } = post;

	return (
		<Layout location={location}>
			<Seo title={title} />
			<Container maxWidth='lg'>
				<Link to='/revistavamos' rel='back'>
					<Button variant="text" sx={{ mt: 2 }} startIcon={<ArrowBackIosNewIcon />}>Todas Revistas</Button>
				</Link>

				<Typography component='h1' variant='h3' sx={{ mb: 0 }}>{title}</Typography>
				<time dateTime={rawDate}>{fecha}</time>

				<Grid container spacing={10}>
					<Grid item xs={12} md={4}>


						<a href={downloadLink} style={{ textDecoration: 'none' }}>
							<Button color="primary" variant='contained' fullWidth sx={{ my: 3, p: 1 }}>
								<strong>Descarga Revista</strong>
							</Button>
						</a>

						<RevistaCard title={title} img={coverImage} slug='' date={fecha} />

						{inDesignID &&
							(<Button
								fullWidth
								sx={{ my: 2 }}
								variant='outlined'
								onClick={handleOpen}>
								Leer Revista online
							</Button>)}


						<div dangerouslySetInnerHTML={{ __html: post.body?.childMarkdownRemark?.html }} />
						<PreviousNext sectionUrl='/revistavamos' previous={previous} next={next} />

						{/* show only for desktop */}
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

					</Grid>

					<Grid item xs={12} md={8} sx={{ mt: 3 }}>
						<RelatedBlogs blogPosts={blogPosts} />
					</Grid>

				</Grid>
			</Container>
		</Layout >
	);
};

export default RevistaTemplate;

export const pageQuery = graphql`
	query RevistaBySlug($slug: String!, $id:String!, $previousPostSlug: String, $nextPostSlug: String) {
		contentfulRevista(slug: { eq: $slug }) {
			id
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
		allContentfulBlogPost(filter: { revista: { id: { eq: $id } } }) {
			nodes {
			id
			slug
			title
			createdAt
			description {
				description
			}
			publishDate(formatString: "MMMM Do, YYYY")
			heroImage {
					gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 424, height: 212)
				}
        	}
      	}
	}
`;

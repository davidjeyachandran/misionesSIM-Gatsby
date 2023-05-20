import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
import type { PageProps } from 'gatsby';
import { get } from 'lodash-es';

// components
import { Container, Box, Button, Modal } from '@mui/material';
import Layout from '../components/Layout';
import Seo from '../components/Seo';


// types
import type { NextPrevious, SingleBlog, SingleRevista } from '../types/types';
import RelatedBlogs from '../components/RelatedBlogs';

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
	// const blogs = 
	const { previous } = data;
	const { next } = data;
	const [open, setOpen] = useState(false);
	const downloadLink = get(post, 'revistaPDF.file.url');

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const { id, title, coverImage, fecha, rawDate, inDesignID } = post;

	console.log(data, location);

	return (
		<Layout location={location}>
			<Seo title={title} />
			<GatsbyImage style={{ maxHeight: 300 }} image={coverImage?.gatsbyImageData} alt={title} />
			<Container>
				<h1>{title}</h1>
				<time dateTime={rawDate}>{fecha}</time>
				<br />
				<a href={downloadLink} style={{ textDecoration: 'none' }}>
					<Button variant='outlined'>Download Revista</Button>
				</a>
				<br />
				{/* <S.Body dangerouslySetInnerHTML={{ __html: post.body?.childMarkdownRemark?.html }} /> */}
				{inDesignID ? (<Button variant='outlined' onClick={handleOpen}>Leer Revista online</Button>) : ''}

				{(previous || next) && (

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

				)}


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

				<RelatedBlogs blogPosts={blogPosts} />
			</Container>
		</Layout>
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

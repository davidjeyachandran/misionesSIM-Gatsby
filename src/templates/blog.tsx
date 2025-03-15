import React from 'react';
import { Link, graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import { get } from 'lodash-es';
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Button, Container, Grid, Typography, Paper, Stack, Alert, Box } from '@mui/material';
import { BLOCKS, MARKS } from '../constants';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// components
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

// types
import type { NextPrevious, SingleBlog } from '../types/types';
import RevistaCard from '../components/RevistaCard';
import { GatsbyImage } from 'gatsby-plugin-image';
import { removeLeadingSlash } from '../utils';
import PreviousNext from '../components/PreviousNext';

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

type MultipleChoice = {
	question: string;
	options: string[];
	correct_answer_index: number;
}

const BlogTemplate = ({ pageContext, data, location }: PageProps<GraphQLResult>) => {
	const post = data.contentfulBlogPost;
	const { previous, next } = data;
	const { title, body, publishDate, revista, multipleChoice } = post;
	const { title: titleRevista, fecha, coverImage, slug } = revista ?? {};
	const img = get(post, 'heroImage.gatsbyImageData.images.sources[0].srcSet');
	const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(null);

	const handleAnswerClick = (index: number) => {
		setSelectedAnswer(index);
	};

	const isCorrectAnswer = (index: number) => {
		return multipleChoice && index === multipleChoice.correct_answer_index;
	};

	return (
		<Layout location={location}>
			<Seo title={post.title} />
			<Container maxWidth='lg'>
				<Grid container spacing={6}>
					<Grid item xs={12} md={3} order={{ xs: 2, md: 1 }}>
						<Link to={`/revistavamos/${removeLeadingSlash(slug)}`} rel='back'>
							<Button variant="text" sx={{ mb: 2 }} startIcon={<ArrowBackIosNewIcon />}>la Revista</Button>
						</Link>

						<RevistaCard title={titleRevista} img={coverImage} slug={slug} date={fecha} />
					</Grid>
					<Grid item xs={12} md={9} order={{ xs: 1, md: 2 }}>
						<Hero title={post.title} />
						<Typography color='#999'>{publishDate}</Typography>
						<GatsbyImage image={post?.heroImage?.gatsbyImageData} alt={title} />
						{body && renderRichText(body, options)}

						<hr />
						{multipleChoice && (
							<Box sx={{ mt: 4 }}>
								<Typography variant="h6" gutterBottom>
									{multipleChoice.question}
								</Typography>

								{selectedAnswer === null ? (
									<Stack spacing={2} sx={{ mt: 2 }}>
										{multipleChoice.options.map((option: string, index: number) => (
											<Button
												key={index}
												variant="outlined"
												fullWidth
												onClick={() => handleAnswerClick(index)}
												sx={{
													justifyContent: 'flex-start',
													textAlign: 'left',
													p: 1.5,
													borderColor: 'secondary.main',
													backgroundColor: 'secondary.main',
													color: 'secondary.contrastText',
													'&:hover': {
														backgroundColor: '#444',
														borderColor: 'secondary.main'
													}
												}}
											>
												{option}
											</Button>
										))}
									</Stack>
								) : (
									<Stack spacing={2} sx={{ mt: 2 }}>
										<Alert
											severity={isCorrectAnswer(selectedAnswer) ? "success" : "error"}
											sx={{ mb: 2 }}
										>
											{isCorrectAnswer(selectedAnswer)
												? "¡Correcto!"
												: "Incorrecto"}
										</Alert>
										{isCorrectAnswer(selectedAnswer) && (
											<>
												<Typography
													variant="body1"
													sx={{
														color: 'success.dark',
														fontStyle: 'italic'
													}}
												>
													{multipleChoice.options[multipleChoice.correct_answer_index]}
												</Typography>
												{next && (
													<Link to={`/blog/${next.slug}`} rel='next'>
														<Button
															variant="outlined"
															sx={{
																marginLeft: "auto",
																mt: 2
															}}
															endIcon={<ArrowForwardIosIcon />}
														>
															Próximo Blog: {next.title}
														</Button>
													</Link>
												)}
											</>
										)}
										{!isCorrectAnswer(selectedAnswer) && (
											<Button
												variant="text"
												onClick={() => setSelectedAnswer(null)}
												sx={{ mt: 2 }}
											>
												Intentar de nuevo
											</Button>
										)}
									</Stack>
								)}
							</Box>
						)}

					</Grid>
				</Grid>


			</Container>
		</Layout>
	);
};

export default BlogTemplate;

export const pageQuery = graphql`
query BlogQuery($slug: String!, $previous: String, $next: String) {
  contentfulBlogPost(slug: { eq: $slug}) {
    id
    nid
    publishDate(formatString: "MMMM Do, YYYY")
    slug
    title
    updatedAt
    body {
      raw
    }
	multipleChoice {
		question
		options
		correct_answer_index
	}
	heroImage {
		gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 424, height: 300)
	}
	revista {
		slug
		title
		fecha(formatString: "MMMM Do, YYYY")
		id
		coverImage {
			gatsbyImageData(placeholder: BLURRED, width: 275)
		}
	}
  }
	previous: contentfulBlogPost(slug: { eq: $previous }) {
		slug
		title
	}
	next: contentfulBlogPost(slug: { eq: $next }) {
		slug
		title
	}
}

`;

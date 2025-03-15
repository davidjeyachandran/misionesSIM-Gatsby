import React from 'react';
import { Link, graphql, navigate } from 'gatsby';
import type { PageProps } from 'gatsby';
import { Container, Grid, TablePagination, Typography } from '@mui/material';
import { get } from 'lodash-es';
import Layout from '../components/Layout';

import type { SingleBlog } from '../types/types';
import BlogCard from '../components/BlogCard';

type PageContext = {
  currentPage: number;
  numPages: number;
  limit: number;
  skip: number;
};

type GraphQLResult = {
  allContentfulBlogPost: {
    nodes: SingleBlog[];
  }
}

const BlogList: React.FC<PageProps<GraphQLResult, PageContext>> = ({ pageContext, data, location }) => {
  // const BlogList = ({ pageContext, data, location }: PageProps<GraphQLResult>) => {
  const posts = data.allContentfulBlogPost.nodes;

  const { currentPage, numPages } = pageContext

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => {
    navigate(page === 0 ? '/blog' : `/blog/${page + 1}`)
  }

  return (
    <Layout location={location}>
      <Container maxWidth='lg'>
        <Typography
          component="h1"
          variant="h2"
          sx={{ mb: 4, mt: 2 }}
        >
          Blogs
        </Typography>
        <Grid container>
          {posts.map((blog) => {
            const description = get(blog, 'description.description', '')
            const slug = get(blog, 'slug', '');
            const title = get(blog, 'title', '');
            return <BlogCard
              key={slug}
              title={title}
              date={blog.publishDate}
              img={blog.heroImage}
              slug={slug}
              description={description}
            />;
          })}

        </Grid>
        <TablePagination
          rowsPerPageOptions={[]}
          count={10 * numPages}
          page={currentPage - 1}
          onPageChange={handleChangePage}
          rowsPerPage={10}
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 25,
            mb: 3.75
          }}
          showFirstButton
          showLastButton
        />

      </Container>
    </Layout>
  );
};

export default BlogList;

export const pageQuery = graphql`
	query BlogListQuery($skip: Int!, $limit: Int!) {
              allContentfulBlogPost(
              filter: {node_locale: {eq: "en-US"}}
              sort: {publishDate: DESC}
              limit: $limit
              skip: $skip
        ) {
          nodes {
            id
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
            description {
              description
            }
            heroImage {
              gatsbyImageData(
                placeholder: BLURRED
                width: 424
                height: 212
              )
              }
            }
        }
  }
        `;

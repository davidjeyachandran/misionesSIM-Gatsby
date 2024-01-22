import React from 'react';
import { Link, graphql, navigate } from 'gatsby';
import type { PageProps } from 'gatsby';
import { Container, Grid, TablePagination } from '@mui/material';
import { get } from 'lodash-es';
import Layout from '../components/Layout';

import type { SingleBlog } from '../types/types';
import BlogCard from '../components/BlogCard';

type PageContext = {
  currentPage: number;
  numPages: number;
  // Add other properties if present in your actual pageContext
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

  const handleChangePage = (event: React.MouseEvent | null, page: number) => {
    console.log(event, page);
    navigate(page === 0 ? '/blog' : `/blog/${page + 1}`)
  }

  return (
    <Layout location={location}>
      <Container maxWidth='lg'>
        <h1>Blogs</h1>
        <Grid container>
          {posts.map((blog) => {
            const description = get(blog, 'description.description', '')
            const slug = get(blog, 'slug');
            return <BlogCard
              key={slug}
              title={blog?.title}
              date={blog.publishDate}
              img={blog?.heroImage}
              slug={slug}
              description={description}
            />;
          })}

        </Grid>
        <TablePagination
          rowsPerPageOptions={[]} // Hides the "Rows per page" dropdown
          count={10 * numPages}
          page={currentPage - 1}
          onPageChange={handleChangePage}
          rowsPerPage={10}
          style={{
            borderTop: `1px solid red`, marginTop: 200, marginBottom: 30
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

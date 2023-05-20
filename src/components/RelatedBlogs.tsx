import React from 'react';
import { SingleBlog } from '../types/types';
import BlogCard from './BlogCard';
import { get } from 'lodash-es';
import { Grid } from '@mui/material';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  createdAt: string;
}

interface QueryResult {
  allContentfulBlogPost: {
    nodes: BlogPost[];
  };
}

interface RelatedBlogsProps {
  blogPosts: SingleBlog[];
}

const RelatedBlogs: React.FC<RelatedBlogsProps> = ({ blogPosts }) => {
  return (<>
    <h2>Blog Relacionada</h2>
    <Grid container>
      {blogPosts.map((blog) => {
        const img = get(blog, 'heroImage.gatsbyImageData.images.sources[0].srcSet', '');
        return <BlogCard key={blog.slug} title={blog?.title} img={img} slug={blog.slug} description={blog?.description.description} />;
      })}
    </Grid>
  </>
  )
};

export default RelatedBlogs;

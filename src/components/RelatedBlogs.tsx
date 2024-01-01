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
  return (
    <Grid container>
      {blogPosts.map((blog) => {
        const { title, slug, publishDate, heroImage } = blog;
        const description = get(blog, 'description.description', '')
        return <BlogCard key={blog.slug}
          date={publishDate}
          title={title}
          img={heroImage}
          slug={slug}
          description={description}
        />;
      })}
    </Grid>
  )
};

export default RelatedBlogs;

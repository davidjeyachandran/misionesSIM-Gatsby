import React from 'react';
import { useStaticQuery, graphql, StaticQuery } from "gatsby";
import { SingleBlog } from '../types/types';
import BlogCard from './BlogCard';
import { get } from 'lodash-es';

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
    <p>Blog Posts</p>
    {blogPosts.map((blog) => {
      const img = get(blog, 'heroImage.gatsbyImageData.images.sources[0].srcSet', '');
      return <BlogCard key={blog.slug} title={blog?.title} img={img} slug={blog.slug} />;
    })}
  </>
  )
};

export default RelatedBlogs;

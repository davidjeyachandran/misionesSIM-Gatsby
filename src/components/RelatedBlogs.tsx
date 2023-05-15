import React from 'react';
import { useStaticQuery, graphql, StaticQuery } from "gatsby";
import { SingleBlog } from '../types/types';

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
  console.log(blogPosts);

  return (<>
    <p>Blog Posts</p>
    {blogPosts.map((blogPost) => (
      <p>{blogPost.title}</p>
    ))}
  </>
  )
};

export default RelatedBlogs;

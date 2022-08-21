import React from 'react';
import { StyledPosts } from './Posts.style';
import Post from '../Post';
import POSTS from '../../../../shared/constants/posts';

const Posts = () => {
  return (
    <StyledPosts>
      {POSTS.map((post) => (
        <Post
          key={post.uid}
          id={post.id}
          image={post.img}
          span={post.span}
          title={post.title}
          desc={post.desc}
        />
      ))}
    </StyledPosts>
  );
};

export default Posts;

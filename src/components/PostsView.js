import React from 'react';
import Post from './Post';

const PostsView = ({posts}) => (
  posts.map(post => {
    return <Post
      key={post.id}
      data={post}
    />
  })
)

export default PostsView

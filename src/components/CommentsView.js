import React from 'react';
import Comment from './Comment';
import CommentForm from '../forms/CommentForm';

const CommentsView = ({comments, updateFn}) => (
  <div>
    <h3>comments</h3>
    <div>
      <div>
        {
          comments.map(comment =>
            <Comment key={comment.id} data={comment} />
          )
        }
      </div>
      <CommentForm onAdd={updateFn} />
    </div>
  </div>
)

export default CommentsView

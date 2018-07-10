import React from 'react';
import { observer, inject } from 'mobx-react';
import PostForm from '../forms/PostForm';
import CommentsView from './CommentsView';
import CategoriesView from './CategoriesView';
import Controls from './Controls';

const Post = inject("postsStore", "categoriesStore", "commentsStore")(
  observer(
    class Post extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          isEditing: false
        };
      }

      updatePost = (post) => {
        this.setState({isEditing: false})
        this.props.postsStore.editPost(post)
      }

      updateCategories = (data) => {
        this.props.categoriesStore.add(
          data,
          this.props.postsStore.updateCategories(this.props.data.id)
        )
      }

      updateComments = (data) => {
        this.props.commentsStore.add(
          data,
          this.props.postsStore.updateComments(this.props.data.id)
        )
      }

      getCategories = ({categories}) => (
        this.props.categoriesStore.categories.filter(
          category => categories.indexOf(category.id) !== -1
        )
      )

      getComments = ({comments}) => (
        this.props.commentsStore.comments.filter(
          c => comments.indexOf(c.id) !== -1
        )
      )

      render() {
        var {data, postsStore} = this.props;
        var {id, author, content, createdAt} = data;
        var categories = this.getCategories(data);
        var comments = this.getComments(data);
        return <div className="mb-6">
          <h2>post</h2>
          <div className="mb-3">
            <div><i>id: </i>{id}</div>
            <div><i>createdAt: </i>{createdAt}</div>
            {
              ! this.state.isEditing
                ? <div>
                    <div><i>author: </i>{author}</div>
                    <div><i>content: </i>{content}</div>
                    <div className="mt-3">
                      <Controls
                        onEdit={() => this.setState({isEditing: true})}
                        onDelete={postsStore.deletePost(id)}
                      />
                    </div>
                  </div>
                : <PostForm
                    onAdd={this.updatePost}
                    data={data}
                    update
                  />
            }
          </div>
          <hr/>
          <CategoriesView
            categories={categories}
            updateFn={this.updateCategories}
          />
          <hr/>
          <CommentsView
            comments={comments}
            updateFn={this.updateComments}
          />
        </div>
      }
    }
  )
)

export default Post

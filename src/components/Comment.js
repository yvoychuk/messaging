import React from 'react';
import { observer, inject } from 'mobx-react';
import CommentForm from '../forms/CommentForm';
import Controls from './Controls';

const Comment = inject("commentsStore")(
  observer(
    class Comment extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          isEditing: false
        };
      }

      updateComment = (comment) => {
        this.setState({isEditing: false})
        this.props.commentsStore.edit(comment)
      }

      render() {
        return <div className="mb-3">
          <div className="mb-3">
            {
              this.state.isEditing
                ? <CommentForm
                    onAdd={this.updateComment}
                    data={this.props.data}
                    update
                  />
                : <div>
                    <p className="mb-2">{this.props.data.content}</p>
                    <Controls
                      onEdit={() => this.setState({isEditing: true})}
                      onDelete={this.props.commentsStore.remove(this.props.data.id)}
                    />
                  </div>
            }
          </div>
        </div>
      }
    }
  )
)

export default Comment

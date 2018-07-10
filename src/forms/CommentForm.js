import React from 'react';
import { observer, inject } from 'mobx-react';

const CommentForm = inject("commentsStore")(
  observer(
    class CommentForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          id: (props.data && props.data.id) || undefined,
          content: (props.data && props.data.content) || ""
        };
      }

      cleanState = () => {
        this.setState({content: ""})
      }

      addComment = () => {
        var {id, content} = this.state;
        this.props.onAdd({id, content});
        this.cleanState();
      }

      updateValue = (name) => (evt) => {
        var __stateUpdate = {};
        __stateUpdate[name] = evt.target.value;
        this.setState(__stateUpdate);
      }

      render() {
        var {content} = this.state;
        return <form>
          <div className="form-group">
            <label><b>write a comment</b></label>
            <input
              value={content}
              className="form-control"
              onChange={this.updateValue("content")}
            />
          </div>
          <button
            type="button"
            onClick={this.addComment}
            className="btn btn-primary"
          >
            {this.props.update ? "update" : "add"}
          </button>
        </form>
      }
    }
  )
)

export default CommentForm;

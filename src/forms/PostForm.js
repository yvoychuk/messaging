import React from 'react';
import { observer, inject } from 'mobx-react';

const PostForm = inject("postsStore")(
  observer(
    class PostForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          id: (props.data && props.data.id) || undefined,
          author: (props.data && props.data.author) || "",
          content: (props.data && props.data.content) || ""
        };
      }

      cleanState = () => {
        this.setState(
          {
            author: "",
            content: ""
          }
        )
      }

      addPost = () => {
        var {id, author, content} = this.state;
        this.props.onAdd({id, author, content});
        this.cleanState();
      }

      updateValue = (name) => (evt) => {
        var __stateUpdate = {};
        __stateUpdate[name] = evt.target.value;
        this.setState(__stateUpdate);
      }

      render() {
        var {author, content} = this.state;
        return <form>
          <div className="form-group">
            <label>author</label>
            <input
              value={author}
              className="form-control"
              onChange={this.updateValue("author")}
            />
          </div>
          <div className="form-group">
            <label>content</label>
            <textarea
              value={content}
              className="form-control"
              onChange={this.updateValue("content")}
            />
          </div>
          <button
            type="button"
            onClick={this.addPost}
            className="btn btn-primary"
          >
            {this.props.update ? "update" : "add"}
          </button>
        </form>
      }
    }
  )
)

export default PostForm;

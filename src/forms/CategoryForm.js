import React from 'react';
import { observer, inject } from 'mobx-react';

const CategoryForm = inject("categoriesStore")(
  observer(
    class CategoryForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          id: (props.data && props.data.id) || undefined,
          name: (props.data && props.data.name) || ""
        };
      }

      cleanState = () => {
        this.setState({name: ""})
      }

      addCategory = () => {
        var {id, name} = this.state;
        this.props.onAdd({id, name});
        this.cleanState();
      }

      updateValue = (name) => (evt) => {
        var __stateUpdate = {};
        __stateUpdate[name] = evt.target.value;
        this.setState(__stateUpdate);
      }

      render() {
        var {name} = this.state;
        return <form>
          <div className="form-group">
            <label><b>add category</b></label>
            <input
              value={name}
              className="form-control"
              onChange={this.updateValue("name")}
            />
          </div>
          <button
            type="button"
            onClick={this.addCategory}
            className="btn btn-primary"
          >
            {this.props.update ? "update" : "add"}
          </button>
        </form>
      }
    }
  )
)

export default CategoryForm;

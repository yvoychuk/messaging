import React from 'react';
import { observer, inject } from 'mobx-react';

const Filter = inject("postsStore", "categoriesStore")(
  observer(
    class Filter extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          term: ""
        };
      }

      handleFilter = () => {
        var category = this.props.categoriesStore.categories.find(
          ct => ct.name === this.state.term
        );
        this.props.handleFilter(category || this.state.term);
      }

      clearFilter = () => {
        this.setState({
          term: ""
        })
        this.props.handleFilter();
      }

      render() {
        return <form>
          <div className="form-group">
            <label>filter by category</label>
            <input
              value={this.state.term}
              className="form-control"
              onChange={(evt) => (this.setState({term: evt.target.value}))}
            />
          </div>
          <div>
            <button
              type="button"
              onClick={this.handleFilter}
              className="btn btn-primary"
            >
              filter
            </button>
            {
              this.state.term.length > 0
                ? <button
                    type="button"
                    className="btn btn-danger ml-2"
                    onClick={this.clearFilter}>
                    clear
                  </button>
                : null
            }
          </div>
        </form>
      }
    }
  )
)

export default Filter

import React from 'react';
import { observer, inject } from 'mobx-react';
import CategoryForm from '../forms/CategoryForm';
import Controls from './Controls';

const Category = inject("categoriesStore")(
  observer(
    class Category extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          isEditing: false
        };
      }

      updateCategory = (category) => {
        this.setState({isEditing: false})
        this.props.categoriesStore.edit(category)
      }

      render() {
        return <div className="mb-3">
          <div className="mb-3">
            {
              this.state.isEditing
                ? <CategoryForm
                    onAdd={this.updateCategory}
                    data={this.props.data}
                    update
                  />
                : <div>
                    <p className="mb-2">{this.props.data.name}</p>
                    <Controls
                      onEdit={() => this.setState({isEditing: true})}
                      onDelete={this.props.categoriesStore.remove(this.props.data.id)}
                    />
                  </div>
            }
          </div>
        </div>
      }
    }
  )
)

export default Category

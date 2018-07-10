import React from 'react';
import Category from './Category';
import CategoryForm from '../forms/CategoryForm';

const CategoriesView = ({categories, updateFn}) => (
  <div>
    <h3>categories</h3>
    <div>
      <div>
        {
          categories.map(category =>
            <Category key={category.id} data={category} />
          )
        }
      </div>
      <CategoryForm onAdd={updateFn} />
    </div>
  </div>
)

export default CategoriesView

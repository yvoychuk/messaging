import React from 'react';

const Controls = ({onEdit, onDelete}) => {
  return <div className="mb-3">
    <button
      onClick={onEdit}
      className="btn btn-primary"
    >
      edit
    </button>
    <button
      onClick={onDelete}
      className="btn btn-danger ml-2"
    >
      delete
    </button>
  </div>
}

export default Controls

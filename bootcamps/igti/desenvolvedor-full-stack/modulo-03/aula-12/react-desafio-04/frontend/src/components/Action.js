import React from 'react'

export default function Action({ id, type, onActionClick }) {

  const handleItemClick = () => {
    onActionClick(id, type);
  }

  return (
    <span>
      <i className="material-icons" onClick={handleItemClick} style={{ cursor: 'pointer' }}>
        {type}
      </i>
    </span>
  )
}

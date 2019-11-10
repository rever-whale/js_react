import React from 'react'
import PropTypes from 'prop-types'
import { NO_NAME, ERROR_MSG, DELETE_ITEM } from '../constants'

function Item ({name, category, idx, deleteItem}) {
  return (
    <div className="item">
      <h5>{name}</h5>
      <button onClick={() => deleteItem(category, idx)}>{DELETE_ITEM}</button>
    </div>
  )
}

Item.defaultProps = {
  name: NO_NAME,
  category: '',
  idx: 0,
  deleteItem: () => console.warn(ERROR_MSG.UNDEFINED_FUNC)
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  idx: PropTypes.number,
  category: PropTypes.string,
  deleteItem: PropTypes.func
}

export default Item;
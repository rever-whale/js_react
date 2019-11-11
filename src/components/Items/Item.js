import React from 'react'
import PropTypes from 'prop-types'
import { ERROR_MSG, TEXT, VALUE } from '../../constants'

function Item ({name, category, idx, deleteItem}) {
  return (
    <div className="item">
      <h5>{name}</h5>
      <button onClick={() => deleteItem(category, idx)}>{TEXT.DELETE_ITEM}</button>
    </div>
  )
}

Item.defaultProps = {
  name: TEXT.NO_NAME,
  category: '',
  idx: VALUE.NULL_INDEX,
  deleteItem: () => console.warn(ERROR_MSG.UNDEFINED_FUNC)
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  idx: PropTypes.number,
  category: PropTypes.string,
  deleteItem: PropTypes.func
}

export default Item;

import React from 'react'
import PropTypes from 'prop-types'
import { CREATE_ITEM, ERROR_MSG } from '../../constants'

function ItemTools ({ roomList, itemName, setItemName, itemCategory, setItemCategory, createItem }) {
  const $roomSelectList = roomList.map(({name}, idx) => (
    <option value={idx} key={idx}>{name}</option>
  ))

  return (
    <div className="item-tools">
      <input
        className="item-input"
        value={itemName}
        onChange={({target: { value }}) => setItemName(value)}/>
      <select value={itemCategory} onChange={({target: { value }}) => setItemCategory(value)}>
        <option value="-1">방 없음</option>
        { $roomSelectList }
      </select>
      <button onClick={createItem}>{CREATE_ITEM}</button>
    </div>
  )
}

ItemTools.defaultProps = {
  roomList: '',
  itemName: '',
  setItemName: () => console.warn(ERROR_MSG.UNDEFINED_FUNC),
  itemCategory: -1,
  setItemCategory: () => console.warn(ERROR_MSG.UNDEFINED_FUNC),
  createItem: () => console.warn(ERROR_MSG.UNDEFINED_FUNC)
}

ItemTools.propTypes = {
  roomList: PropTypes.string, 
  itemName: PropTypes.string, 
  setItemName: PropTypes.func, 
  itemCategory: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), 
  setItemCategory: PropTypes.func,
  createItem: PropTypes.func
}

export default ItemTools
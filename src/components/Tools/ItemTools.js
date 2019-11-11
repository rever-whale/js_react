import React from 'react'
import PropTypes from 'prop-types'
import { ERROR_MSG, CREATE_ITEM, NO_ROOM, NULL_INDEX } from '../../constants'

function ItemTools ({itemName, setItemName, itemCategory, setItemCategory, createItem, roomList }) {
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
        <option value={NULL_INDEX}>{NO_ROOM}</option>
        { $roomSelectList }
      </select>
      <button onClick={createItem}>{CREATE_ITEM}</button>
    </div>
  )
}

ItemTools.defaultProps = {
  setItemName: () => console.warn(ERROR_MSG.UNDEFINED_FUNC),
  setItemCategory: () => console.warn(ERROR_MSG.UNDEFINED_FUNC),
  createItem: () => console.warn(ERROR_MSG.UNDEFINED_FUNC),
  roomName: '',
  itemName: '',
  roomList: [],
  itemCategory: NULL_INDEX
}

ItemTools.propTypes = {
  itemName: PropTypes.string,
  setItemName: PropTypes.func,
  itemCategory: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  setItemCategory: PropTypes.func,
  roomList: PropTypes.array,
  createItem: PropTypes.func,
}

export default ItemTools

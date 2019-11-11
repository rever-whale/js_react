import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

// load constants
import { NO_NAME, ERROR_MSG } from '../../constants'

function Room ({name, list, deleteRoom, deleteItem}) {
  const itemList = list.map(({name, category, idx}) => (
    <Item name={name} category={category} key={idx} deleteItem={deleteItem}/>
  ))

  return (
    <div className="room">
      <h1 className="room-name">{name}</h1>
      <button onClick={() => deleteRoom()}>방 삭제</button>
      <div className="item-list">
        {itemList}
      </div>
    </div>
  )
}

Room.defaultProps = {
  name: NO_NAME,
  list: [],
  deleteRoom: () => console.warn(ERROR_MSG.UNDEFINED_FUNC),
  deleteItem: () => console.warn(ERROR_MSG.UNDEFINED_FUNC)
}

Room.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.array,
  deleteRoom: PropTypes.func,
  deleteItem: PropTypes.func
}

export default Room

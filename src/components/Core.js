import React from 'react'
import PropTypes from 'prop-types'
import { ERROR_MSG } from '../constants'

// load component
import Room from './Items/Room'
import RoomTools from './Tools/RoomTools'
import ItemTools from './Tools/ItemTools'

function Core ({roomName, setRoomName, createRoom, itemName, setItemName, 
  itemCategory, setItemCategory, roomList, createItem, deleteRoom, deleteItem}) {

  const $roomList = roomList.map(({name, list}, idx) => (
    <Room key={idx} name={name} list={list} deleteRoom={() => deleteRoom(idx)} deleteItem={deleteItem}/>
  ))

  return (
    <div className="room-container">
      <RoomTools
        roomName={roomName}
        setRoomName={setRoomName}
        createRoom={createRoom}
      />
      <ItemTools
        itemName={itemName}
        setItemName={setItemName}
        itemCategory={itemCategory}
        setItemCategory={setItemCategory}
        roomList={roomList}
        createItem={createItem}
      />
      <div className="room-list">
        {$roomList}
      </div>
    </div>
  )
}

Core.defaultProps = {
  roomName: '',
  itemName: '',
  itemCategory: 0,
  roomList: [],
  setRoomName: () => console.warn(ERROR_MSG.UNDEFINED_FUNC),
  createRoom: () => console.warn(ERROR_MSG.UNDEFINED_FUNC),
  setItemName: () => console.warn(ERROR_MSG.UNDEFINED_FUNC),
  setItemCategory: () => console.warn(ERROR_MSG.UNDEFINED_FUNC),
  createItem: () => console.warn(ERROR_MSG.UNDEFINED_FUNC),
  deleteRoom: () => console.warn(ERROR_MSG.UNDEFINED_FUNC),
  deleteItem: () => console.warn(ERROR_MSG.UNDEFINED_FUNC)
}

Core.propTypes = {
  roomName: PropTypes.string,
  itemName: PropTypes.string,
  itemCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  roomList: PropTypes.array,
  setRoomName: PropTypes.func,
  createRoom: PropTypes.func,
  setItemName: PropTypes.func,
  setItemCategory: PropTypes.func,
  createItem: PropTypes.func,
  deleteRoom: PropTypes.func,
  deleteItem: PropTypes.func
}

export default Core

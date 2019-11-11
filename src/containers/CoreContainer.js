import React from 'react'
import { useStateValue } from '../context'
import Core from '../components/Core'
import {
  SET_ROOM_NAME, CREATE_ROOM, SET_ITEM_NAME,
  SET_ITEM_CATEGORY, CREATE_ITEM,
  DELETE_ITEM, DELETE_ROOM
} from '../context/types'

function CoreContainer () {
  // state
  const [{roomName, roomList, itemName, itemCategory}, dispatch] = useStateValue()

  return (
    <Core 
      roomName={roomName}
      itemName={itemName}
      itemCategory={itemCategory}
      roomList={roomList}
      setRoomName={(payload) => dispatch({ type: SET_ROOM_NAME, payload })}
      createRoom={() => dispatch({ type: CREATE_ROOM })}
      setItemName={(payload) => dispatch({ type: SET_ITEM_NAME, payload })}
      setItemCategory={(payload) => dispatch({ type: SET_ITEM_CATEGORY, payload })}
      createItem={() => dispatch({ type: CREATE_ITEM })} 
      deleteRoom={(payload) => dispatch({ type: DELETE_ROOM, payload })}
      deleteItem={(roomIdx, itemIdx) => dispatch({ type: DELETE_ITEM, payload: { roomIdx, itemIdx } })} 
    />
  ) 
}

export default CoreContainer

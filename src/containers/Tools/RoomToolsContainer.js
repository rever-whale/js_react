import React from 'react'
import { useStateValue } from '../../context'
import { CREATE_ROOM, SET_ROOM_NAME } from '../../context/types'
import RoomTools from '../../components/Tools/RoomTools'

function RoomToolsContainers() {
  const [{ roomName }, dispatch] = useStateValue()

  return (
    <RoomTools
      roomName={roomName}
      setRoomName={(payload) => dispatch({ type: SET_ROOM_NAME, payload })}
      createRoom={() => dispatch({ type: CREATE_ROOM })}
    />
  )
}

export default RoomToolsContainers

import React from 'react'
import { useStateValue } from '../../store'
import { SET_ROOM_NAME, CREATE_ROOM } from '../../store/types'
import RoomTools from '../../components/Tools/RoomTools'

function RoomToolsContainer () {
  const [{ roomName }, dispatch] = useStateValue()

  return (
    <RoomTools
      roomName={roomName}
      setRoomName={(payload) => dispatch({ type: SET_ROOM_NAME, payload })}
      createRoom={() => dispatch({ type: CREATE_ROOM })}
    />
  )
}

export default RoomToolsContainer

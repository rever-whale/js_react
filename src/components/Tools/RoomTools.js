import React from 'react'
import PropTypes from 'prop-types'
import { ERROR_MSG, TEXT } from '../../constants'

function RoomTools ({createRoom, setRoomName, roomName}) {
  return (
    <div className="room-tools">
      <input
        className="room-input"
        value={roomName}
        onChange={({target: { value }}) => setRoomName(value)}/>
      <button
        className="btn-create-room"
        onClick={createRoom}
        >{TEXT.CREATE_ROOM}
      </button>
    </div>
  )
}

RoomTools.defaultProps = {
  createRoom: () => console.warn(ERROR_MSG.UNDEFINED_FUNC),
  setRoomName: () => console.warn(ERROR_MSG.UNDEFINED_FUNC),
  roomName: ''
}

RoomTools.propTypes = {
  createRoom: PropTypes.func,
  setRoomName: PropTypes.func,
  roomName: PropTypes.string
}

export default RoomTools

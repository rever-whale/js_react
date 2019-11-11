import React from 'react'
import PropTypes from 'prop-types'
import { CREATE_ROOM, ERROR_MSG } from '../../constants'

function RoomTools ({roomName, setRoomName, createRoom}) {
  return (
    <div className="room-tools">
      <input
        className="room-input"
        value={roomName}
        onChange={({target: { value }}) => setRoomName(value)}/>
      <button
        className="btn-create-room"
        onClick={createRoom}
        >{CREATE_ROOM}
      </button>
    </div>
  )
}

RoomTools.defaultProps = {
  roomName: '',
  setRoomName: () => console.warn(ERROR_MSG.UNDEFINED_FUNC),
  createRoom: () => console.warn(ERROR_MSG.UNDEFINED_FUNC)
}

RoomTools.propTypes = {
  roomName: PropTypes.string,
  setRoomName: PropTypes.func,
  createRoom: PropTypes.func
}

export default RoomTools
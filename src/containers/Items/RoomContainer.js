import React from 'react'
import { useStateValue } from '../../context'
import { DELETE_ROOM } from '../../context/types'
import Room from '../../components/Items/Room'

function RoomContainer(props) {
  const [, dispatch] = useStateValue()

  return (
    <Room
      {...props}
      deleteRoom={(payload) => dispatch({ type: DELETE_ROOM, payload })}
    />
  )
}

export default RoomContainer



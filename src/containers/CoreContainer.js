import React from 'react'
import { useStateValue } from '../context'
import Core from '../components/Core'

function CoreContainer () {
  // state
  const [{ roomList }] = useStateValue()

  return (
    <Core roomList={roomList} />
  ) 
}

export default CoreContainer

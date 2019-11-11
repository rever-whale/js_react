import React from 'react'
import Core from '../components/Core'
import { useStateValue } from '../store'

function CoreContainer () {
  const [{ roomList }] = useStateValue()
  
   return (
    <Core roomList={roomList} />
   ) 
}

export default CoreContainer
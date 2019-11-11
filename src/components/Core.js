import React from 'react'
import RoomToolsContainer from '../containers/Tools/RoomToolsContainer'
import ItemToolsContainer from '../containers/Tools/ItemToolsContainer'
import RoomContainer from '../containers/Items/RoomContainer'

function Core ({ roomList }) {
 
  // dom
  const $roomList = roomList.map(({name, list}, idx) => (
    <RoomContainer key={idx} name={name} list={list} />
  ))

  return (
    <div className="room-container">
      <div className="tool-container">
        <RoomToolsContainer />
        <ItemToolsContainer/>
      </div>
      <div className="room-list">
        {$roomList}
      </div>
    </div>
  ) 
}

export default Core
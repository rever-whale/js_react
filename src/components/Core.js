import React from 'react'
import PropTypes from 'prop-types'

// load component
import RoomContainer from '../containers/Items/RoomContainer'
import RoomToolsContainer from '../containers/Tools/RoomToolsContainer'
import ItemToolsContainer from '../containers/Tools/ItemToolsContainer'

function Core ({ roomList }) {
  const $roomList = roomList.map(({name, list}, idx) => (
    <RoomContainer key={idx} name={name} list={list} />
  ))

  return (
    <div className="room-container">
      <RoomToolsContainer />
      <ItemToolsContainer />
      <div className="room-list">
        {$roomList}
      </div>
    </div>
  )
}

Core.defaultProps = {
  roomList: [],
}

Core.propTypes = {
  roomList: PropTypes.array,
}

export default Core

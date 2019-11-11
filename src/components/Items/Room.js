import React from 'react'
import PropTypes from 'prop-types'
import ItemContainer from '../../containers/Items/ItemContainer'

// load constants
import { TEXT, ERROR_MSG, VALUE } from '../../constants'

function Room ({idx, name, list, deleteRoom }) {
  const itemList = list.map(({name, category, idx}) => (
    <ItemContainer name={name} category={category} key={idx} />
  ))

  return (
    <div className="room">
      <h1 className="room-name">{name}</h1>
      <button onClick={() => deleteRoom(idx)}>방 삭제</button>
      <div className="item-list">
        {itemList}
      </div>
    </div>
  )
}

Room.defaultProps = {
  idx: VALUE.NULL_INDEX,
  name: TEXT.NO_NAME,
  list: [],
  deleteRoom: () => console.warn(ERROR_MSG.UNDEFINED_FUNC),
}

Room.propTypes = {
  idx: PropTypes.number,
  name: PropTypes.string.isRequired,
  list: PropTypes.array,
  deleteRoom: PropTypes.func,
}

export default Room

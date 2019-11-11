import React from 'react'
import { useStateValue } from '../../context'
import { SET_ITEM_NAME, SET_ITEM_CATEGORY, CREATE_ITEM } from '../../context/types'
import ItemTools from '../../components/Tools/ItemTools'

function ItemToolsContainers() {
  const [{ roomName, itemName, roomList, itemCategory }, dispatch] = useStateValue()

  return (
    <ItemTools
      roomName={roomName}
      itemName={itemName}
      roomList={roomList}
      itemCategory={itemCategory}
      setItemName={(payload) => dispatch({ type: SET_ITEM_NAME, payload })}
      setItemCategory={(payload) => dispatch({ type: SET_ITEM_CATEGORY, payload})}
      createItem={() => dispatch({ type: CREATE_ITEM })}
    />
  )
}

export default ItemToolsContainers

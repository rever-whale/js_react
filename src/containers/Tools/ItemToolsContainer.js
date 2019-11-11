import React from 'react'
import { useStateValue } from '../../store'
import { SET_ITEM_NAME, SET_ITEM_CATEGORY, CREATE_ITEM } from '../../store/types'
import ItemTools from '../../components/Tools/ItemTools'

function ItemToolsContainer () {
  const [{ roomList, itemName, itemCategory }, dispatch] = useStateValue()

  return (
    <ItemTools
      roomList={roomList}
      itemName={itemName}
      itemCategory={itemCategory}
      setItemName={(payload) => dispatch({ type: SET_ITEM_NAME, payload })}
      setItemCategory={(payload) => dispatch({ type: SET_ITEM_CATEGORY, payload })}
      createItem={() => dispatch({ type: CREATE_ITEM })}
    />
  )
}

export default ItemToolsContainer

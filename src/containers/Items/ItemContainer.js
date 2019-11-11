import React from 'react'
import { useStateValue } from '../../store'
import { DELETE_ITEM } from '../../store/types'
import Item from '../../components/Items/Item'

function ItemContainer (props) {
  const [, dispatch] = useStateValue()
  return (
    <Item
      {...props}
      deleteItem={(roomIdx, itemIdx) => dispatch({
        type: DELETE_ITEM,
        payload: { roomIdx, itemIdx }
      })}
    />
  )
}

export default ItemContainer
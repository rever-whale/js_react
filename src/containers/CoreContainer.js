import React, { useState } from 'react'
import Core from '../components/Core'
import { ERROR_MSG } from '../constants'

/**
 * 1. 방 만들기
 * 2. 방 삭제하기
 */
function CoreContainer () {
  // state
  const [roomName, setRoomName] = useState('')
  const [roomList, setRoomList] = useState([])
  const [itemName, setItemName] = useState('')
  const [itemCategory, setItemCategory] = useState(-1)

  // method
  function createRoom() {
    if (!roomName) {
      alert(ERROR_MSG.NO_NAME)
      return
    }

    if (roomList.length > 0 && isDuplicatedName(roomName)) {
      alert(ERROR_MSG.DUPLICATE_NAME)
      resetRoomName()
      return
    }

    const list = roomList.slice()
    list.push({
      name: roomName,
      list: []
    })

    setRoomList(list)
    resetRoomName()
  }

  function isDuplicatedName(targetName) {
    return roomList.some(({name}) => {
      return (name === targetName) 
    })
  }

  function deleteRoom(idx) {
    const list = roomList.slice()
    list.splice(idx, 1)

    setRoomList(list)
  }

  function resetRoomName () {
    setRoomName('')
  }

  // item method
  function createItem () {
    if (itemCategory === -1) {
      alert(ERROR_MSG.NO_SELECTED_ROOM)
      return
    }

    if (!itemName) {
      alert(ERROR_MSG.NO_NAME)
      return
    }

    const targetList = roomList.slice()
    const targetItemList = targetList[itemCategory].list
    targetItemList.push({
      name: itemName,
      category: itemCategory,
      idx: targetItemList.length
    })

    setRoomList(targetList)
    resetItemName()
    resetItemCategory()
  }

  function deleteItem (roomIdx, itemIdx) {
    const targetList = roomList.slice()
    const targetItemList = targetList[roomIdx].list
    targetItemList.splice(itemIdx, 1)

    setRoomList(targetList)
  }

  function resetItemName () {
    setItemName('')
  }

  function resetItemCategory () {
    setItemCategory(-1)
  }

  return (
    <Core 
      roomName={roomName}
      setRoomName={setRoomName}
      createRoom={createRoom}
      itemName={itemName}
      setItemName={setItemName}
      itemCategory={itemCategory}
      setItemCategory={setItemCategory}
      roomList={roomList}
      createItem={createItem}
      deleteRoom={deleteRoom}
      deleteItem={deleteItem}/>
  ) 
}

export default CoreContainer

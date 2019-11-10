import React, { useState } from 'react'
import Room from '../components/Room'
import { CREATE_ROOM, ERROR_MSG, CREATE_ITEM } from '../constants'

/**
 * 1. 방 만들기
 * 2. 방 삭제하기
 */
function RoomContainer () {
  // state
  const [roomName, setRoomName] = useState('')
  const [roomList, setRoomList] = useState([])
  const [itemName, setItemName] = useState('')
  const [itemCategory, setItemCategory] = useState('-1')

  // method

  /**
   * 방을 만든다.
   * 1. 입력되있는 이름이 없거나,
   * 2. 중복되는 이름이 있을 경우 예외처리한다.
   */
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

  // dom
  const $roomList = roomList.map(({name, list}, idx) => (
    <Room key={idx} name={name} list={list} deleteRoom={() => deleteRoom(idx)} deleteItem={deleteItem}/>
  ))

  const $roomSelectList = roomList.map(({name}, idx) => (
    <option value={idx} key={idx}>{name}</option>
  ))

  return (
    <div className="room-container">
      <div className="room-tools">
        <input
          className="room-input"
          value={roomName}
          onChange={({target: { value }}) => setRoomName(value)}/>
        <button
          className="btn-create-room"
          onClick={createRoom}
          >{CREATE_ROOM}
        </button>
      </div>
      <div className="item-tools">
        <input
          className="item-input"
          value={itemName}
          onChange={({target: { value }}) => setItemName(value)}/>
        <select value={itemCategory} onChange={({target: { value }}) => setItemCategory(value)}>
          <option value="-1">방 없음</option>
          { $roomSelectList }
        </select>
        <button onClick={createItem}>{CREATE_ITEM}</button>
      </div>
      <div className="room-list">
        {$roomList}
      </div>
    </div>
  ) 
}

export default RoomContainer
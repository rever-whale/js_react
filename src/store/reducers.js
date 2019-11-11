import * as types from './types'
import { ERROR_MSG } from '../constants'

function reducers (state, action) {
  switch (action.type) {
    case types.SET_ROOM_NAME:
      return {
        ...state,
        roomName: action.payload
      }
    case types.SET_ROOM_LIST:
      return {
        ...state,
        roomList: action.payload
      }
      case types.SET_ITEM_NAME: 
      return {
        ...state,
        itemName: action.payload
      }
    case types.SET_ITEM_CATEGORY:
      return {
        ...state,
        itemCategory: action.payload
      }
    case types.CREATE_ROOM: {
      const { roomName, roomList } = state
      if (!roomName) {
        alert(ERROR_MSG.NO_NAME)
        return { ...state }
      }
  
      if (roomList.length > 0 && isDuplicatedName(roomList, roomName)) {
        alert(ERROR_MSG.DUPLICATE_NAME)
        return { ...state, roomName: '' }
      }
  
      const list = roomList.slice()
      list.push({
        name: roomName,
        list: []
      })
  
      return {
        ...state,
        roomList: list,
        roomName: ''
      }
    }
    case types.DELETE_ROOM: {
      const { roomList } = state
      const { payload: idx } = action
      const list = roomList.slice()
      list.splice(idx, 1)
  
      return {
        ...state,
        roomList: list
      }
    }
    case types.CREATE_ITEM: {
      const { roomList, itemCategory, itemName } = state
      const targetList = roomList.slice()
      const targetItemList = targetList[itemCategory].list
      targetItemList.push({
        name: itemName,
        category: itemCategory,
        idx: targetItemList.length
      })

      return {
        ...state,
        roomList: targetList,
        itemName: '',
        itemCategory: -1
      }
    }
    case types.DELETE_ITEM: {
      const { roomList } = state
      const { payload: { roomIdx, itemIdx } } = action
      const targetList = roomList.slice()
      const targetItemList = targetList[roomIdx].list
      targetItemList.splice(itemIdx, 1)
  
      return {
        ...state,
        roomList: targetList
      }
    }
      
    default:
      return state
  }
}

function isDuplicatedName(roomList, targetName) {
  return roomList.some(({name}) => {
    return (name === targetName) 
  })
}

export default reducers
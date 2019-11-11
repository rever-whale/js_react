import * as types from './types'
import { ERROR_MSG, NULL_INDEX } from '../constants'

const reducer = (state, action) => {
  switch(action.type) {
    case types.SET_ROOM_NAME:
      return {
        ...state,
        roomName: action.payload
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
      if (!state.roomName) {
        alert(ERROR_MSG.NO_NAME)
        return { ...state, roomName: ''}
      }

      if (state.roomList.length > 0 && isDuplicatedName(state.roomList, state.roomName)) {
        alert(ERROR_MSG.DUPLICATE_NAME)
        return { ...state, roomName: ''}
      }

      const list = state.roomList.slice()
      list.push({
        name: state.roomName,
        list: []
      })

      return {
        ...state,
        roomName: '',
        roomList: list
      }
    }
    case types.CREATE_ITEM: {
      if (state.itemCategory === NULL_INDEX) {
        alert(ERROR_MSG.NO_SELECTED_ROOM)
        return { ...state, itemCategory: NULL_INDEX }
      } 
    
      if (!state.itemName) {
        alert(ERROR_MSG.NO_NAME)
        return { ...state, itemCategory: NULL_INDEX }
      }
      
      const targetList = state.roomList.slice()
      const targetItemList = targetList[state.itemCategory].list
      targetItemList.push({
        name: state.itemName,
        category: state.itemCategory,
        idx: targetItemList.length
      })

      return {
        ...state,
        roomList: targetList,
        itemCategory: NULL_INDEX
      }
    }

    case types.DELETE_ROOM: {
      const list = state.roomList.slice()
      list.splice(action.payload, 1)
      return {
        ...state,
        roomList: list
      }
    }

    case types.DELETE_ITEM: {
      const targetList = state.roomList.slice()
      const targetItemList = targetList[action.payload.roomIdx].list
      targetItemList.splice(action.payload.itemIdx, 1)
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

export default reducer

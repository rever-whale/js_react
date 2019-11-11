import {
  SET_ROOM_NAME, SET_ITEM_NAME, SET_ITEM_CATEGORY,
  CREATE_ROOM, CREATE_ITEM, DELETE_ROOM, DELETE_ITEM
} from './types'

export const setRoomName = (name) => ({
  type: SET_ROOM_NAME,
  payload: name
})

export const setItemName = (name) => ({
  type: SET_ITEM_NAME,
  payload: name
})

export const setItemCategory = (idx) => ({
  type: SET_ITEM_CATEGORY,
  payload: idx
})

export const createRoom = () => ({
  type: CREATE_ROOM
})

export const createItem = () => ({
  type: CREATE_ITEM
})

export const deleteRoom = (idx) => ({
  type: DELETE_ROOM,
  payload: idx
})

export const deleteItem = (roomIdx, itemIdx) => ({
  type: DELETE_ITEM,
  payload: {
    roomIdx,
    itemIdx
  }
})

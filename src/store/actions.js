import * as types from './types'

export const setRoomName = (payload) => ({
  type: types.SET_ROOM_NAME,
  payload
})

export const setRoomList = (payload) => ({
  type: types.SET_ROOM_NAME,
  payload
})

export const setItemName = (payload) => ({
  type: types.SET_ITEM_NAME,
  payload
})

export const setItemCategory = (payload) => ({
  type: types.SET_ITEM_CATEGORY,
  payload
})

export const createRoom = () => ({
  type: types.CREATE_ROOM
})

export const deleteRoom = (payload) => ({
  type: types.DELETE_ROOM,
  payload
})

export const createItem = () => ({
  type: types.CREATE_ITEM
})

export const deleteItem = (roomIdx, itemIdx) => ({
  type: types.DELETE_ITEM,
  payload: {
    roomIdx,
    itemIdx
  }
})
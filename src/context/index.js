import React, { useReducer, useContext, createContext } from 'react'
import reducers from './reducers'
import initialState from './states'

export const StateContext = createContext()
export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducers, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)

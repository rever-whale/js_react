import React from 'react'
import CoreContainer from './CoreContainer'
import { StateProvider } from '../store'

function App () {
  return (
    <StateProvider>
      <CoreContainer />
    </StateProvider>
  )
}

export default App
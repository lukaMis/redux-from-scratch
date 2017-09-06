
import React from 'react'

import AddCounter from '../containers/AddCounterContainer'
import Count from '../containers/CountContainer'
import RemoveCounter from '../containers/RemoveCounterContainer'

export default function App() {
  return(
    <div>
      <Count />
      <AddCounter />
      <RemoveCounter />
    </div>
  )
}


import React from 'react'
import { connect } from 'react-redux'

import RemoveCounter from '../components/RemoveCounter'
import { removeCounter } from '../actions/counterActions'

function mapDispatchToProps(dispatch) {
  return {
    removeCounter: () => dispatch(removeCounter())
  }
}

export default connect(null, mapDispatchToProps)(RemoveCounter)


import React from 'react'
import { connect } from 'react-redux'

import AddCounter from '../components/AddCounter'
import { addCounter } from '../actions/counterActions'

function mapDispatchToProps(dispatch) {
  return {
    addCounter: () => dispatch(addCounter())
  }
}

export default connect(null, mapDispatchToProps)(AddCounter)

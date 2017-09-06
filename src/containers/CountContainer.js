
import React from 'react'
import { connect } from 'react-redux'

import Count from '../components/Count'

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Count)

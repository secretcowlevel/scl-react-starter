import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { uiMessageSelector } from '../selectors/'
import { setUiMessage } from '../actions/'

const mapStateToProps = createStructuredSelector({
  message: uiMessageSelector
})

const mapDispatchToProps = {
  setUiMessage
}

export default
@connect(mapStateToProps, mapDispatchToProps)
class extends Component {
    static propTypes= {
      message: PropTypes.string.isRequired,
      setUiMessage: PropTypes.func.isRequired
    }

    handleButtonClick = () => {
      this.props.setUiMessage('Hello World!')
    }

    render () {
      return (
        <Fragment>
          <h1>This is the profile route</h1>
          {this.props.message && <div>{this.props.message}</div>}
          <button onClick={this.handleButtonClick}>Test Redux</button>
          <Link to='/'>go to home</Link>
        </Fragment>
      )
    }
}

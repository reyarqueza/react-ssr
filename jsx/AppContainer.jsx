import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions'
import App from './App.jsx'

class AppContainer extends PureComponent {
  render() {
    return <App {...this.props} />
  }

  componentDidMount() {
    this.props.fetchData()
  }

  // shouldComponentUpdate(nextProps) {
  //   console.log('nextProps', prevProps)
  //   console.log('this.props', this.props)
  //   return nextProps.nav === this.props.nav
  //     ? false
  //     : true
  // }
}

function mapStateToProps(state) {
  const {
    nav,
    hero,
    cards,
    footer
  } = state

  return {
    nav,
    hero,
    cards,
    footer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => {
      dispatch(fetchData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

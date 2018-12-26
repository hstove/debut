import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Container from 'react-bulma-components/lib/components/container'
import UserProvider from 'components/User/UserProvider'
import AdminUsernameRoute from 'pages/admin/_username/route'
import RootPage from 'pages'
import UsernamePage from 'pages/username'
import Navbar from 'components/Navbar'
import { connect } from 'react-redux'
import requestSessionUser from 'actions/user/requestSessionUser'

class Routes extends Component {
  static propTypes = {
    userSession: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { userSession } = this.props
    this.props.requestSessionUser(userSession)
  }

  render() {
    const { userSession } = this.props

    return (
      <UserProvider userSession={userSession}>
        <Navbar />
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              render={({ location }) => <RootPage />}
            />
            <Route
              exact
              path="/:username"
              render={({ match, location }) => <UsernamePage username={match.params.username} location={location} />}
            />
            <Route
              path="/admin/:username"
              render={({ match }) => <AdminUsernameRoute match={match} />}
            />
          </Switch>
        </Container>
      </UserProvider>
    )
  }
}

export default connect(null, {
  requestSessionUser,
})(Routes)

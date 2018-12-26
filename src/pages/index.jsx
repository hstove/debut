import React, { Component } from 'react'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Table from 'react-bulma-components/lib/components/table'
import requestAllUsers from 'actions/user/requestAllUsers'
import './stylesheets/_root.scss'

class RootPage extends Component {
  componentDidMount() {
    this.props.requestAllUsers()
  }

  onBoxClick = (user) => {
    const { history } = this.props

    history.push({
      pathname: `/${user.username}`,
      state: {
        identityAddress: user.blockstackId
      }
    })
  }

  render() {
    const { users } = this.props

    return (
      <div className="root-page">
        <Table>
          <tbody>
            {
              _.map(users, (user) => {
                return <tr className="username-table-row" onClick={() => this.onBoxClick(user)}>
                  <td>{user.username} has joined debut!</td>
                </tr>
              })
            }
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user.users
  }
}
export default connect(mapStateToProps, {
  requestAllUsers
})(withRouter(RootPage))
// export default withRouter(connect(mapStateToProps, {
//   requestAllUsers
// })(RootPage))

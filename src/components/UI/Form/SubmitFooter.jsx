import React, { Component } from 'react'
import Button from 'react-bulma-components/lib/components/button'
import './stylesheets/_submit-footer.scss'

class SubmitFooter extends Component {
  render() {
    return (
      <div className="submit-footer">
        <Button
          onClick={this.props.onCancel}
          className="mr-half"
        >
          Cancel
        </Button>
        <Button
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </div>
    )
  }
}

export default SubmitFooter

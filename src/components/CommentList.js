import React, { Component } from "react";
// import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

class CommentList extends Component {

  renderComments() {
    this.props.comments.map(comment => {
      return <li ket={comment}>{comment}</li>
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  comments: state.comments
})

export default connect(mapStateToProps)(CommentList)

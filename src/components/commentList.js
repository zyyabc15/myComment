import React, { Component } from "react";
import Comment from "./comment";
import { connect } from "react-redux";
import actions from "../actions/actions";
class CommentList extends Component {
  render() {
    return (
      <div className={"commentList"}>
        {this.props.comments.map((comment, key) => {
          return (
            <Comment
              key={key}
              index={key}
              comment={comment}
              delComment={this.props.delComment}
            />
          );
        })}
      </div>
    );
  }
}
let mapStateToProps = state => {
  return {
    comments: state.comments
  };
};
let mapDispatchToProps = dispatch => {
  return {
    delComment: index => {
      dispatch(actions.deleteComment(index));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CommentList);

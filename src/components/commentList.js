import React, { Component } from 'react';
import Comment from './comment';
import { connect } from 'react-redux';
class CommentList extends Component {
    render() {
        return (
            <div className={"commentList"}>
                {this.props.comments.map((comment, key) => {
                    return <Comment key={key} comment={comment} />
                })}
            </div>

        )
    }
}
const mapStateToProps = state => {
    return ({
        comments: state.comments
    })
}
connect(mapStateToProps, null)(CommentList)
export default CommentList;
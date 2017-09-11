import types from '../reducers/reducer.js'
const reducer = (state = [], action) => {
    switch (action.type) {
        case types.INIT_COMMENTS:
            return this.init_comments(state, action);
        case types.ADD_COMMENT:
            return this.add_comment(state, action);
        case types.DELETE_COMMENT:
            return this.delete_comment(state, action);
        default:
            return state;
    }
}
const init_comments = (state, action) => {
    let comments = state.comments;
    let newComments = localStorage.getItem('comments');
    state.comments = newComments;
    return state;
}
const add_comment = (state, action) => {
    let comment = action.value;
    let comments = state.comments.slice(0);
    comments.push(comment);
    localStorage.setItem('comments', comments);
    state.comments = comments;
    return state;
}
const delete_comment = (state, action) => {
    let index = action.value;
    let comments = [...state.comments.slice(0, index), ...state.comments.slice(index + 1)];
    localStorage.setItem('comments', comments);
    state.comments = comments;
    return state;
}
export default reducer;
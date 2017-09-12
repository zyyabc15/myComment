import types from '../types/types'
const actions={
    initComments:()=>({
        type:types.INIT_COMMENTS
    }),
    addComment:(comment)=>({
        type:types.ADD_COMMENT,
        value:comment
    }),
    deleteComment:(index)=>({
        type:types.DELETE_COMMENT,
        value:index
    })

}
export default actions;
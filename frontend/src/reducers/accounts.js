
//reducer will receive state and action from dispatch and update store accordingly
export default (state = [], actions) => {
    switch(actions.type) {
        case 'FETCH_ALL':
            return actions.payload;
        case 'CREATE':
            return state;
        default:
            return state;
    }
}
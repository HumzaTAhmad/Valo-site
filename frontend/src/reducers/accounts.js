
//reducer will receive state and action from dispatch and update store accordingly
export default (state = [], action) => {
    switch(action.type) {
        case 'UPDATE':
            return state.map((account) => account._id === action.payload._id ? action.payload : account);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...state, action.payload];
        default:
            return state;
    }
}
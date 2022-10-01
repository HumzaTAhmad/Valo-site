import * as api from '../api/index.js';


// Action Creators
export const getAccounts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchAccounts();

        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message)
    }
}
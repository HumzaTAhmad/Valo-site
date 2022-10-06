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

export const postAccount = (account) => async(dispatch) => {
    try {
        const {data} = await api.createAccount(account);
        dispatch({type: 'CREATE', payload: data});
    }catch(error){
        console.log(error);
    }
}
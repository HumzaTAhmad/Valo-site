import axios from 'axios';

const url = 'http://localhost:3000/account'

export const fetchAccounts = () => axios.get(url)
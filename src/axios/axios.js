import axios from 'axios';
const instance = axios.create({ baseURL: 'https://recipenation-app.herokuapp.com/' });
export default instance;

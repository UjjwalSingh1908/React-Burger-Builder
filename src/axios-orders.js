import { defaults } from 'autoprefixer';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a8413.firebaseio.com'

});

export default instance;
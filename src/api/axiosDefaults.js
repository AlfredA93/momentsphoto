import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-alf-f7affde58488.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;
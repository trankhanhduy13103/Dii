import axios from "axios"
const httpAxios = axios.create({
    baseURL: 'http://localhost/trankhanhduy_2121110298_laravel/public/api/',
    timeout: 6000,
    headers: {'X-Custom-Header': 'foobar'}
  });
export default httpAxios;
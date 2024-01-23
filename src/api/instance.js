import axios from "axios";

const instance = axios.create({
  baseURL: '/apps/folojet',
});

export default instance ;
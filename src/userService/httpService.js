import axios from 'axios';
import jwtDecode from 'jwt-decode';
const url = 'https://hammerhead-app-bry9f.ondigitalocean.app/api';
const token = 'token';
axios.defaults.baseURL = url;
setTokenHeader();
export const httpService = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  patch: axios.patch,
  put: axios.put,
};

export function createUser(user) {
  return httpService.post('/users', user);
}

export async function signIn(values) {
  const { data } = await httpService.post('/auth', values);
  localStorage.setItem(token, data.token);
  setTokenHeader();
}
export function getJwt() {
  return localStorage.getItem(token);
}
export function setToCommonHeader(headerName, value) {
  return (axios.defaults.headers.common[headerName] = value);
}
export function setTokenHeader() {
  setToCommonHeader('x-auth-token', getJwt());
}
export function getUser() {
  try {
    return jwtDecode(getJwt());
  } catch {
    return null;
  }
}
export function logOut() {
  localStorage.removeItem(token);
  setTokenHeader();
}

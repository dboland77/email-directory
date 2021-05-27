import axios from 'axios'

const EMAIL_URL = `https://api.trumail.io/v2/lookups/json?email=`

export const FETCH_EMAILDATA = 'FETCH_USERS';

export function fetchEmailData(query) {
  const q_url = `${EMAIL_URL}${query}`;
  const request = axios.get(q_url);
  return {
    type: FETCH_EMAILDATA,
    payload: request
  };
}

// Note to self: I have disabled CORS in Safari to run this (development only)

// Example response
// {
//     "address": "sdfds@sdfds.com",
//     "username": "sdfds",
//     "domain": "sdfds.com",
//     "md5Hash": "9d02bedec4fbcc35a2f780a1324ef8c4",
//     "suggestion": "",
//     "validFormat": true,
//     "deliverable": false,
//     "fullInbox": false,
//     "hostExists": false,
//     "catchAll": false,
//     "gravatar": false,
//     "role": false,
//     "disposable": false,
//     "free": false
// }
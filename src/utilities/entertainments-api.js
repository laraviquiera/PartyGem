import sendRequest from "./send-request";
const BASE_URL = '/api/entertainments';

export async function addEntertainment(formData) {
    return sendRequest(`${BASE_URL}`, 'POST', formData);
  };
  
  export async function getEntertainments() {
    return sendRequest(`${BASE_URL}`);
  };
  
  export async function getEntertainment(id) {
    return sendRequest(`${BASE_URL}/${id}`);
  };
  
import sendRequest from "./send-request";
const BASE_URL = '/api/caterers';

export async function addCaterer(formData) {
    return sendRequest(`${BASE_URL}`, 'POST', formData);
  };
  
  export async function getCaterers() {
    return sendRequest(`${BASE_URL}`);
  };
  
  export async function getCaterer(id) {
    return sendRequest(`${BASE_URL}/${id}`);
  };
  
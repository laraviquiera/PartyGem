import sendRequest from "./send-request";
const BASE_URL = '/api/services';

export async function createCatering(formData) {
    return sendRequest(`${BASE_URL}/catering`, 'POST', formData);
  };
  
  export async function getCaterers() {
    return sendRequest(`${BASE_URL}/catering`);
  };
  
  export async function getCaterer(id) {
    return sendRequest(`${BASE_URL}/cetering/${id}`);
  };
  
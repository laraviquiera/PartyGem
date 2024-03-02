import sendRequest from "./send-request";
const BASE_URL = '/api/venues';

export async function addVenue(formData) {
    return sendRequest(`${BASE_URL}`, 'POST', formData);
  };
  
  export async function getVenues() {
    return sendRequest(`${BASE_URL}`);
  };
  
  export async function getVenue(id) {
    return sendRequest(`${BASE_URL}/${id}`);
  };
  
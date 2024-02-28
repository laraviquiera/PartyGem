import sendRequest from "./send-request";
const BASE_URL = '/api/plans';

export async function createPlan(formData) {
  return sendRequest(`${BASE_URL}`, 'POST', formData);
};

export async function getPlans() {
  return sendRequest(BASE_URL);
};

export async function updatePlan(id, formData) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', formData);
};
  
export async function deletePlan(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
};
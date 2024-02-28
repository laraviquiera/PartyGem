import sendRequest from "./send-request";
const BASE_URL = '/api/plans';

export async function createPlan(formData) {
  return sendRequest(`${BASE_URL}`, 'POST', formData);
};

export async function getPlans() {
    return sendRequest(BASE_URL);
  };
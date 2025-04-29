import { fetchAPI } from '../api'; 

export const initializeTimes = async () => {
  const today = new Date();
  const times = await fetchAPI(today);
  return times;
};

export const updateTimes = (state, action) => {
  if (action.type === 'update') {
    return fetchAPI(new Date(action.date));
  }
  if (action.type === 'initialize') {
    return action.times;
  }
  return state;
};
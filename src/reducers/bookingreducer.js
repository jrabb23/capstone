import { fetchAPI } from '../api'; 
export const initializeTimes = async () => {
  const today = new Date();
  const times = await fetchAPI(today);
  return times;
};

export const updateTimes = async (state, action) => {
  if (action.type === 'update') {
    const updatedTimes = await fetchAPI(new Date(action.date)); 
    return updatedTimes;
  }
  return state;
};

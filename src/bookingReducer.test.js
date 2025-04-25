import { initializeTimes, updateTimes } from './reducers/bookingReducer';
import { fetchAPI } from './api';

jest.mock('./api');

beforeEach(() => {
  fetchAPI.mockResolvedValue(["17:00", "18:00", "19:00", "20:00"]);
});

describe('bookingReducer', () => {
  test('initializeTimes should return available times', async () => {
    const times = await initializeTimes();
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(times).toEqual(["17:00", "18:00", "19:00", "20:00"]);
  });

  test('updateTimes should return updated available times based on date', async () => {
    const updatedTimes = await updateTimes([], { type: 'update', date: '2025-05-01' });
    expect(fetchAPI).toHaveBeenCalledWith(new Date('2025-05-01'));
    expect(updatedTimes).toEqual(["17:00", "18:00", "19:00", "20:00"]);
  });
});

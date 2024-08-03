import { fetchAPI } from 'path/to/api'; 

describe('fetchTimesForDate', () => {
  test('should return available times for a given date', async () => {
    const date = '2024-08-05';
    const times = await fetchTimesForDate(date);
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });

  test('should handle errors gracefully', async () => {
    // Mock the fetchAPI to simulate an error
    global.fetchAPI = jest.fn(() => Promise.reject(new Error('Failed to fetch')));
    
    const date = '2024-08-05';
    const times = await fetchTimesForDate(date);
    expect(times).toEqual([]);
  });
});

import { reducer } from './Main'; // Adjust the import path as necessary

describe('Reducer function tests', () => {
  test('initializeTimes should set the initial times', () => {
    const initialTimes = ['17:00', '18:00', '19:00', '20:00'];
    const action = { type: 'SET_INITIAL_TIMES', times: initialTimes };
    const result = reducer([], action);
    expect(result).toEqual(initialTimes);
  });

  test('updateTimes should update the available times', () => {
    const updatedTimes = ['18:00', '19:00', '20:00'];
    const action = { type: 'UPDATE_TIMES', times: updatedTimes };
    const result = reducer([], action);
    expect(result).toEqual(updatedTimes);
  });
});

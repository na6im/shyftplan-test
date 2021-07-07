import api from './api';
import {eventsData, EventDetails} from "./mockedData";
import mockedAxios from "./__mocks__/axios";

describe('getEvents', () => {
  it('fetches successfully data from an API', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({data: eventsData}));
    const events = await api.getEvents(10, 0, {});
    await expect(events).toEqual(eventsData);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });

  it('should return error when request fails', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('error'))
    );

    await expect(api.getEvents(10, 0, {})).rejects.toThrow('error');
  });
});

describe('getEvent', () => {
  it('fetches successfully data from an API', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: EventDetails }));
    const blocks = await api.getEvent('12');
    await expect(blocks).toEqual(EventDetails);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toBeCalledWith(
      '/events/12'
    );
  });

  it('should return error when request fails', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('error'))
    );

    await expect(api.getEvent('hash')).rejects.toThrow('error');
  });
});

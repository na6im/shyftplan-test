import axios from 'axios';

import api from './api';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getBlocks', () => {
  it('fetches successfully data from an API', async () => {
    const response = {
      data: [
        { height: '123', time: new Date(), hash: 'hash' },
        { height: '123', time: new Date(), hash: 'hash' },
        { height: '123', time: new Date(), hash: 'hash' },
        { height: '123', time: new Date(), hash: 'hash' },
      ],
    };

    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(response));
    const blocks = await api.getBlocks();
    await expect(blocks).toEqual(response.data);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });

  it('should return error when request fails', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('error'))
    );

    await expect(api.getBlocks()).rejects.toThrow('error');
  });
});

describe('getDetail', () => {
  it('fetches successfully data from an API', async () => {
    const response = {
      data: [{ size: '123', prev_block: new Date(), hash: 'hash' }],
    };

    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(response));
    const blocks = await api.getDetail('hash');
    await expect(blocks).toEqual(response.data);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toBeCalledWith(
      'http://localhost:4000/api/blocks/hash'
    );
  });

  it('should return error when request fails', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('error'))
    );

    await expect(api.getDetail('hash')).rejects.toThrow('error');
  });
});

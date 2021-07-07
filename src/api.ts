import axios from 'axios';

const EVENTS = '/events';
const instance = axios.create({
  baseURL: 'https://fyx8bq1lpa.execute-api.eu-central-1.amazonaws.com/Prod/',
  timeout: 1000,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  auth: {
    username: 'frontend@shyftplan.com',
    password: 'api_test_auth_token',
  },
});

const getEvents = async (limit: number, offset: number, args: any) => {
  const { pageParam = 0 } = args
  const response = await instance.get(EVENTS, { params: { limit, offset: pageParam } });
  return response.data;
};

const getEvent = async () => {
  const response = await instance.get(EVENTS);
  return response.data;
};

export default {
  getEvents,
  getEvent,
};

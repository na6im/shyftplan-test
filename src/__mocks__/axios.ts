import axios from 'axios';

const mockAxios = jest.genMockFromModule<typeof axios>('axios');
mockAxios.create = jest.fn(() => mockAxios) as any;

export default mockAxios;

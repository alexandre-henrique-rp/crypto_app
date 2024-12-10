import axios from 'axios';

const Request = axios.create({
  baseURL: 'https://cryptoserver.kingdevtec.com/crypto',
  headers: {
    'Content-Type': 'application/json',
  },
});

const Api = {
  async getAll() {
    const {data} = await Request.get('/');
    return data;
  },

  async getOne(id: string) {
    try {
      const {data} = await Request.get(`/${id}`);
      return data;
    } catch (error) {
      return error;
    }
  },

  async getTag(tag: any) {
    const {data} = await Request.get(`/tag/${tag}/process`);
    return data;
  },
};

export default Api;

import axios from 'axios';

const Request = axios.create({
  baseURL: 'http://189.5.194.55:3035/crypto',
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

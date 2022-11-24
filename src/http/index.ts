import axios, { AxiosError, CreateAxiosDefaults } from 'axios';
import { ElMessage } from 'element-plus';

const option: CreateAxiosDefaults = {
  url: 'localhost',
};

const client = axios.create(option);

client.interceptors.response.use(
  (resp) => {
    if (!resp.data.success) {
      const { msg } = resp.data;
      ElMessage.error(msg);
      return Promise.reject(msg);
    }
    return resp.data;
  },
  (err: AxiosError) => {
    ElMessage.error(`${err.code}:${err.message}`);
    return Promise.reject(err);
  }
);

export default client;

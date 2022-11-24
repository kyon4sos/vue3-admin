import { useAxios, UseAxiosOptions } from '@vueuse/integrations/useAxios';
import axios from '@/http';
import { AxiosRequestConfig } from 'axios';

const useRequest = <T>(
  url: string,
  config?: AxiosRequestConfig,
  option?: UseAxiosOptions
) => {
  return useAxios<T>(
    url,
    config ?? { method: 'GET' },
    axios,
    option ?? {
      immediate: true,
    }
  );
};

export default useRequest;

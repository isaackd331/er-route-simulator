import axios, { AxiosError } from "axios";
import axiosRetry, { isNetworkOrIdempotentRequestError } from "axios-retry";

// axios 인스턴스 생성
const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 20000,
});

// axios-retry를 통한 API 재요청 환경 생성
// TODO: https://velog.io/@nagosu/axios-retry%EB%A1%9C-API-%EC%9A%94%EC%B2%AD-%EC%95%88%EC%A0%95%EC%84%B1-%EB%86%92%EC%9D%B4%EA%B8%B0
axiosRetry(http, {
  retries: 3,
  shouldResetTimeout: true,
  retryDelay: (retryCount) => retryCount * 1000,
  retryCondition: (error: AxiosError) => {
    const status = error.response?.status;
    return isNetworkOrIdempotentRequestError(error) || status === 429;
  },
});

// Axios Request Interceptor
http.interceptors.request.use(
  (config) => {
    // TODO: Something
    return config;
  },
  (err) => {
    // TODO: Something
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  (res) => {
    // TODO: Something
    return res;
  },
  (err) => {
    // TODO: Something
    return Promise.reject(err);
  }
);

export default http;

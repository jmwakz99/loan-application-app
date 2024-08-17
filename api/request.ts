import axios, { AxiosRequestConfig } from "axios";
import { AxiosError } from "axios";

import { API_BASE_URL } from "@/constants/urls";

export const coreRequestHandler = (request: AxiosRequestConfig) => {
  return request;
};
export const errorHandler = (error: AxiosError) => {
  let errorObj = error.response
    ? JSON.parse(JSON?.stringify(error.response))
    : "";

  // handle network errors
  if (!errorObj) {
    errorObj = error ? JSON.parse(JSON?.stringify(error)) : "";
  }

  return Promise.reject({
    message: errorObj?.data ?? errorObj?.data?.message ?? errorObj?.message,
  });
};

const requestHandler = axios.create({
  baseURL: API_BASE_URL,
});

requestHandler.interceptors.request.use(
  (request) => {
    coreRequestHandler(request);
    return request;
  },
  (error) => Promise.reject(error)
);

requestHandler.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => errorHandler(error)
);

export default requestHandler;

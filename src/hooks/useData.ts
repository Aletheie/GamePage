import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  CanceledError,
} from "axios";

export interface FetchResponse<T> {
  count: number;
  result: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res: AxiosResponse) => {
          setIsLoading(false);
          setData(res.data.results);
        })
        .catch((err: AxiosError) => {
          if (err instanceof CanceledError) return;
          setIsLoading(false);
          setError(err.message);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;

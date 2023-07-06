import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, AxiosResponse, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  result: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
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
  }, []);

  return { data, error, isLoading };
};

export default useData;

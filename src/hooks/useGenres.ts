import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, AxiosResponse, CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenresResponse {
  count: number;
  result: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res: AxiosResponse) => {
        setIsLoading(false);
        setGenres(res.data.results);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;

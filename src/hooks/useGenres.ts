import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: async () => {
      const response = (await apiClient.getAll({})) as unknown;
      return response;
    },
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;

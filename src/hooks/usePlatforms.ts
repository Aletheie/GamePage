import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import { Platform } from "./useGames";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: async () => {
      const response = (await apiClient.getAll({})) as unknown;
      return response;
    },
    staleTime: 26 * 60 * 60 * 1000,
    initialData: platforms,
  });

export default usePlatforms;

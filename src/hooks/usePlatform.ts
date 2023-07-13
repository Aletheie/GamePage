import { FetchResponse } from "../services/api-client";
import { Platform } from "./useGames";
import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  const typedPlatformData = platforms as FetchResponse<Platform>;
  return typedPlatformData?.results.find((p) => p.id === id);
};

export default usePlatform;

import { FetchResponse } from "../services/api-client";
import { Game } from "./useGames";
import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data } = useGenres();
  const typedData = data as FetchResponse<Game>;
  return typedData?.results.find((g) => g.id === id);
};

export default useGenre;

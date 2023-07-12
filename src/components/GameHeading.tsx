import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import { FetchResponse } from "../services/api-client";
import { Game, Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data } = useGenres();
  const typedData = data as FetchResponse<Game>;
  const genre = typedData?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const typedPlatformData = platforms as FetchResponse<Platform>;
  const platform = typedPlatformData?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading fontSize="5xl" marginY={7} ml={9} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;

import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameHeading from "../components/GameHeading";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "230px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside " paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main ">
        <GameHeading />
        <Flex>
          <Box mr={4}>
            <PlatformSelector />
          </Box>

          <SortSelector />
        </Flex>

        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;

import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "230px 1fr",
      }}
    >
      <GridItem area="nav ">
        <NavBar />
      </GridItem>
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
}

export default App;

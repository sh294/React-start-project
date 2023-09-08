import { data } from "./utils/data";
import { RecipeListPage } from "./pages/RecipeListPage";
import { Center, Grid, Box } from "@chakra-ui/react";
import RecipePage from "./pages/RecipePage";
import { useState } from "react";
import { Header } from "./components/Header";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();

  const recipes = data.hits.map((hit) => hit.recipe);

  return (
    <Header>
      <Box w="100%" h="100%">
        <Center>
          <Grid w="100%">
            {selectedItem ? (
              <RecipePage recipes={selectedItem} clickFn={setSelectedItem} />
            ) : (
              <RecipeListPage recipes={recipes} clickFn={setSelectedItem} />
            )}
          </Grid>
        </Center>
      </Box>
    </Header>
  );
};

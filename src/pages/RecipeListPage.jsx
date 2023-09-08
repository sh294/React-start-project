import { Center, Input, SimpleGrid, Box,  } from "@chakra-ui/react";
import { useState } from "react";
import Cards from "../components/Cards";

export const RecipeListPage = ({ recipes, clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const text = Object.values(recipe).flat().join(" ")/*.replace(/-/g, " ");*/

    return text.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleSearchChanges = (event) => {
    setSearchField(event.target.value);
  };

  const renderRecipes = () => {
  
    return filteredRecipes.map((recipe) => (
      <Cards
        clickFn={clickFn}
        key={recipe.label}
        recipe={recipe}
        minHeight="150px"
      />
    ));
  };

  return (
    <Center bg="lightblue" mb="3rem" w="100%" p="5rem">
      <Box position="absolute" top="5rem" left="20%" w="60%">
        <Input
          bg="light blue"
          m="auto"
          placeholder="Search Recipes"
          onChange={handleSearchChanges}
          h="3rem"
        />
      </Box>
      <SimpleGrid
        columns={[1, 2, 3, 4]}
        gap={5}
        transition="all 0.3s ease"
        spacingX={5}
        w="100%"
        top="50%"
      >
        {renderRecipes()}
      </SimpleGrid>
    </Center>
  );
};

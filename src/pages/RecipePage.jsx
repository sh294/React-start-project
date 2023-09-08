import { lazy, Suspense } from "react";
import {
  CardBody, Card, Flex, Stack, Image, Text, Box, Spacer, Heading, Tag, Badge,
  IconButton,
} from "@chakra-ui/react";
const LazyCenter = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.Center }))
);
const LazyButton = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.Button }))
);
import { ChevronLeftIcon } from "@chakra-ui/icons";

const RecipePage = ({ recipes, clickFn }) => {
  return (
  <>
    
        <Box bg="lightblue" >
           <Suspense fallback={<div>Loading...</div>}>
          <LazyButton
        
            pl=".4rem"
            w="fit-content"
            onClick={() => clickFn(null)}
            color="blue"
          >
            <IconButton
              fontSize={40}
              aria-label="previous page"
              icon={<ChevronLeftIcon />}
              onClick={() => clickFn(null)}
              color="blue"
            />
          </LazyButton>
        </Suspense>
        < Suspense fallback={<div>Loading...</div>}>
          <LazyCenter>
            <Card
              borderRadius="x2"
              w="50%"
              h="50%"
              bg="white"
              pb="1rem"
              mb="4rem"
            >
              <CardBody m="0%" p="0%">
                <Image
                  src={recipes.image}
                  alt={recipes.label}
                  w="100%"
                  h="250px"
                  objectFit="cover"
                  overflow="hidden"
                />
                <Stack mt="6" spacing="3" pl="1.5rem">
                  <Flex
                    gap={5}
                    flexWrap={["wrap", "nowrap"]}
                    flexDirection={["column", "row"]}
                  >
                    <Box w="50%" p=".3rem">
                      {" "}
                      <Text
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize={15}
                        color="gray.600"
                      >
                        {recipes.mealType}
                      </Text>
                      <Heading size="md">{recipes.label}</Heading>
                      <Text>
                        Total Cooking Time: {recipes.totalTime} Minutes{" "}
                      </Text>
                      <Text>Servings: {recipes.yield} </Text>
                      <Text fontWeight="bold">Ingredients</Text>
                      <Text>
                        {recipes.ingredientLines.map((ingredientLine) => (
                          <Text key={ingredientLine}>{ingredientLine}</Text>
                        ))}
                      </Text>
                    </Box>
                    <Spacer />
                    <Box w="50%" p=".4rem">
                      {" "}
                      <Text>Health labels</Text>
                      <Text textTransform="uppercase">
                        {recipes.healthLabels.map((healthLabel) => (
                          <Tag
                            fontWeight="bold"
                            colorScheme="purple"
                            key={healthLabel}
                            marginRight="0.4rem"
                            mt="0.4rem"
                          >
                            {healthLabel}
                          </Tag>
                        ))}
                      </Text>
                      {recipes.dietLabels.length > 0 && (
                        <>
                          <Text m="0 " p="1" fontWeight="normal">
                            Diet
                          </Text>
                          <Text textTransform="uppercase">
                            {recipes.dietLabels.map((diet) => (
                              <Tag
                                fontWeight="bold"
                                colorScheme="red"
                                key={diet.label}
                                marginRight="0.4rem"
                                mt="0.4rem"
                              >
                                {diet}
                              </Tag>
                            ))}
                          </Text>
                        </>
                      )}
                      {recipes.cautions.length > 0 && (
                        <>
                          <Text m="0 " p="1" fontWeight="normal">
                            Cautions:
                          </Text>
                          <Text textTransform="uppercase">
                            {recipes.cautions.map((caution) => (
                              <Tag
                                fontWeight="bold"
                                colorScheme="red"
                                key={caution}
                                marginRight="0.4rem"
                                mt="0.4rem"
                              >
                                {caution}
                              </Tag>
                            ))}
                          </Text>
                        </>
                      )}
                      <Text mt=".8rem">Total Nutrients</Text>
                      <Flex flexDirection={["column", "row"]} flexWrap={"wrap"}>
                        <Box mr={5} mt={2}>
                          <Text>
                            {Math.floor(
                              recipes.totalNutrients.ENERC_KCAL.quantity
                            )}{" "}
                          </Text>
                          <Text>
                            <Badge
                              variant="outline"
                              colorScheme="green"
                              textTransform="uppercase"
                            >
                              Calories
                            </Badge>
                          </Text>
                        </Box>

                        <Box mr={5} mt={2}>
                          <Text>
                            {" "}
                            {Math.floor(
                              recipes.totalNutrients.CHOCDF.quantity
                            )}{" "}
                            {recipes.totalNutrients.CHOCDF.unit}
                          </Text>
                          <Text>
                            {" "}
                            <Badge
                              variant="outline"
                              colorScheme="green"
                              textTransform="uppercase"
                            >
                              {recipes.totalNutrients.CHOCDF.label}
                            </Badge>
                          </Text>
                        </Box>

                        <Box mr={5} mt={2}>
                          <Text>
                            {Math.floor(recipes.totalNutrients.PROCNT.quantity)}{" "}
                            {recipes.totalNutrients.PROCNT.unit}
                          </Text>
                          <Text>
                            {" "}
                            <Badge
                              variant="outline"
                              colorScheme="green"
                              textTransform="uppercase"
                            >
                              {recipes.totalNutrients.PROCNT.label}
                            </Badge>
                          </Text>
                        </Box>

                        <Box mr={5} mt={2}>
                          <Text>
                            {Math.floor(recipes.totalNutrients.FAT.quantity)}{" "}
                            {recipes.totalNutrients.FAT.unit}
                          </Text>
                          <Text>
                            {" "}
                            <Badge
                              variant="outline"
                              colorScheme="yellow"
                              textTransform="uppercase"
                            >
                              {recipes.totalNutrients.FAT.label}
                            </Badge>
                          </Text>
                        </Box>

                        <Box mr={5} mt={2}>
                          <Text>
                            {Math.floor(recipes.totalNutrients.CHOLE.quantity)}{" "}
                            {recipes.totalNutrients.CHOLE.unit}
                          </Text>
                          <Text>
                            {" "}
                            <Badge
                              variant="outline"
                              colorScheme="pink"
                              textTransform="uppercase"
                            >
                              {recipes.totalNutrients.CHOLE.label}
                            </Badge>
                          </Text>
                        </Box>
                        <Box mr={5} mt={2}>
                          {" "}
                          <Text>
                            {Math.floor(recipes.totalNutrients.NA.quantity)}{" "}
                            {recipes.totalNutrients.NA.unit}
                          </Text>
                          <Text>
                            {" "}
                            <Badge
                              variant="outline"
                              colorScheme="green"
                              textTransform="uppercase"
                            >
                              {recipes.totalNutrients.NA.label}
                            </Badge>
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </Stack>
              </CardBody>
            </Card>
          </LazyCenter>
   </Suspense>
      </Box>
    </>
  );
};

export default RecipePage;

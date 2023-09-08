import { Heading, Center } from "@chakra-ui/react";
export const Header = (props) => {
  const navigateToHomepage = () => {
    window.location.href = "/";
  };
  return (
    <>
      <Center bg="lightblue">
        <Heading
          p="1rem"
          color="gray400"
          fontSize="2rem"
          onClick={navigateToHomepage}
          cursor="pointer"
          _hover={{ color: "black" }}
        >
          Winc Recipe cheker
        </Heading>
      </Center>
      {props.children}
    </>
  );
};

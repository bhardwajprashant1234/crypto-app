import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p="4" shadow="base" style={{ background: 'linear-gradient(#20627F, #FFA500)' }}>
      <Button
        variant={"unstyled"}
        color={"white"}
        _hover={{ color: "#000000" }} // Change color on hover
      >
        <Link to="/">Home</Link>
      </Button>
      <Button
        variant={"unstyled"}
        color={"white"}
        ml={2}
        _hover={{ color: "#000000" }} // Change color on hover
      >
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button
        variant={"unstyled"}
        color={"white"}
        ml={2}
        _hover={{ color: "#000000" }} // Change color on hover
      >
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;

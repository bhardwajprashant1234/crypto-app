import { Avatar, Box, Stack, Text, VStack, Link } from "@chakra-ui/react";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <Box
  style={{
    background: `linear-gradient( #FFA500,#022B3D)`,
  }}
  color="whiteAlpha.700"
  minH="48"
  px="16"
  py={["16", "8"]}
>
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
        <Text fontWeight="bolder" color="#000000">
  About Us
</Text>

          <Text
            fontSize={"sm"}
            fontWeight={"bolder"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
           Unlock your trading potential with our top-rated crypto trading app in India.
          </Text>
        </VStack>

        {/* Add your social media links here */}
        <Stack direction="row" spacing={4} ml="auto">
          <Link href="https://www.instagram.com/bhardwaj.prashant.07/" isExternal>
            <Avatar as={FaInstagram} name="Instagram" size="sm" />
          </Link>
          <Link href="https://github.com/bhardwajprashant1234" isExternal>
            <Avatar as={FaGithub} name="GitHub" size="sm" />
          </Link>
          <Link href="https://m.facebook.com/prashant.bhardwaj.7374480l" isExternal>
            <Avatar as={FaFacebook} name="Facebook" size="sm" />
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;

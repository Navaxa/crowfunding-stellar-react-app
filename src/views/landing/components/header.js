import React from "react";
import { Image, Box } from "@chakra-ui/react";

const Header = () => {
  return (
      <Box>
        <Image
          src="./image/logo.svg"
          height="300"
          width="100%"
          objectFit="cover"
          alt="Stella Laboratory"
        ></Image>
      </Box>
  );
};

export default Header;

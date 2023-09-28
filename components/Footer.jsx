import { Box } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Box
        textAlign="center"
        p={5}
        color="gray.600"
        borderTop="1px"
        borderColor="gray.100"
      >
        <Link href="https://appardana.com/">
          2023 © Aditria Pardana | Papanmas Estate.
        </Link>
      </Box>
    </>
  );
};

export default Footer;

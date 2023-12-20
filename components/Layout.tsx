import { Box, Container, Text } from "@chakra-ui/react";
import Header from "./Header";
import { ReactNode } from "react";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

interface IProps {
  children: ReactNode;
}
const Layout: React.FC<IProps> = ({ children }): JSX.Element => {
  return (
    <Box className={poppins.className}>
      
      <Header />
      {children}
      <Text color="blackAlpha.500" textAlign="center" mt="40" mb="10">
        Copyright © 2023 Taufik Hidayat All Rights Reserved
      </Text>
      
    </Box>
  );
};
export default Layout;

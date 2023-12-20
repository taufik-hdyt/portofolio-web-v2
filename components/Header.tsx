import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";

import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Header: React.FC = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HStack
      zIndex={999}
      py={{base: 3, md: 4}}
      justify={{base: "space-between", md: "center"}}
      px={{ base: 4, md: "48" }}
      pos="fixed"
      top={0}
      bg={
        scrolled
          ? "linear-gradient(to right, #4CB8C4 0%, #3CD3AD  51%, #4CB8C4  100%)"
          : "transparent"
      }
      w="full"
    >
      <HStack color={scrolled ? "white" : 'black'} display={{ base: "flex", md: "none" }}>
        <AiFillGithub size={24} />
        <AiOutlineInstagram size={24} />
        <AiFillLinkedin size={24} />
      </HStack>

      <HStack
        spacing="10"
        color={scrolled ? "white" : "#666666"}
        fontWeight="500"
      >
        <Flex gap={6} display={{ base: "none", md: "flex" }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="#techStack">TechStack</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </Flex>

        <HStack display={{ base: "none", md: "flex" }}>
          <AiFillGithub size={24} />
          <AiOutlineInstagram size={24} />
          <AiFillLinkedin size={24} />
        </HStack>
      </HStack>
      <Box display={{ base: "block", md: "none" }}>
        <HiMenuAlt1 color={scrolled ? "white" : "black"} size={35} />
      </Box>
    </HStack>
  );
};

export default Header;

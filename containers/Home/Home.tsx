import Header from "@/components";
import CardItem from "@/components/CardItem";
import Layout from "@/components/Layout";
import { animationLogo, animationTech } from "@/utils/animations";
import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";
import Typewriter from "typewriter-effect";

const Home: React.FC = (): JSX.Element => {
  const data = [
    {
      name: "HTML",
      logo: "/logo/html.png",
    },
    {
      name: "CSS",
      logo: "/logo/css.png",
    },
    {
      name: "Javascript",
      logo: "/logo/javascript.png",
    },
    {
      name: "Typescript",
      logo: "/logo/typescript.png",
    },
    {
      name: "Node Js",
      logo: "/logo/node.png",
    },
    {
      name: "PostgreSQL",
      logo: "/logo/postgres.png",
    },
    {
      name: "React Js",
      logo: "/logo/react.png",
    },
    {
      name: "React Native",
      logo: "/logo/react.png",
    },
    {
      name: "Next Js",
      logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    },

    {
      name: "Git",
      logo: "https://iconape.com/wp-content/png_logo_vector/git-icon.png",
    },
  ];

  const dataProject = [
    {
      name: "Project 1",
      image: "",
      linkGithub: "",
      linkDemo: "",
    },
  ];

  return (
    <Layout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationLogo}
        transition={{ duration: 1 }}
      >
        <Stack h="100vh" justify="center" align="center" spacing={0}>
          <Box
            p={1.5}
            rounded="full"
            bg="linear-gradient(to right, #4CB8C4 0%, #3CD3AD  51%, #4CB8C4  100%)"
          >
            <Box bg="white" p={1} rounded="full" w="120px" h="120px">
              <Image
                bgPos="center"
                w="full"
                h="full"
                rounded="full"
                src="https://res.cloudinary.com/doushe6hn/image/upload/v1702891629/logo/phhnskya2vk6mldw1d7n.png"
                alt="logo"
              />
            </Box>
          </Box>

          <Text
            mt={3}
            textAlign="center"
            fontWeight="bold"
            fontSize="xl"
            color="#42446E"
          >
            Hi,I am Taufik Hidayat
          </Text>
          <Text
            display="flex"
            gap={2}
            fontWeight="hairline"
            fontSize="lg"
            color="#42446E"
          >
            I am a
            <Text fontWeight="600">
              <Typewriter
                options={{
                  strings: ["Frontend Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Text>
          </Text>

          <Button
            bg="linear-gradient(to right, #4CB8C4 0%, #3CD3AD  51%, #4CB8C4  100%)"
            mt={3}
            color="white"
          >
            Download CV
          </Button>
        </Stack>
      </motion.div>

      <Box id="techStack">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationTech}
          transition={{ duration: 1.5 }}
        >
          <Box position="relative" padding="10">
            <Divider />
            <AbsoluteCenter
              fontSize="2xl"
              fontWeight="700"
              color="#42446E"
              bg="white"
              px="4"
            >
              Skills
            </AbsoluteCenter>
          </Box>
        </motion.div>

        <Flex justify="center" mt={4} gap={10} flexWrap="wrap">
          {data.map((e: { name: string; logo: string }, idx: number) => (
            <Stack align="center" key={idx}>
              <Image alt="Logo" w="50px" src={e.logo} />
              <Text>{e.name}</Text>
            </Stack>
          ))}
        </Flex>
      </Box>

      <Box mt={"10"} position="relative" padding="10">
        <Divider />
        <AbsoluteCenter
          fontSize="2xl"
          fontWeight="700"
          color="#42446E"
          bg="white"
          px="4"
        >
          My Projects
        </AbsoluteCenter>
      </Box>

      <Stack id="projects" align="center">
        <Grid gridTemplateColumns={{ base: "1fr", md: "repeat(3,1fr)" }}>
          <Box>
            <CardItem />
          </Box>
        </Grid>

        <Button
          mt={4}
          bg="linear-gradient(to right, #4CB8C4 0%, #3CD3AD  51%, #4CB8C4  100%)"
          w="fit-content"
          rightIcon={<IoArrowForwardCircle size={24} />}
          color="white"
        >
          Show All Project
        </Button>
      </Stack>
    </Layout>
  );
};

export default Home;

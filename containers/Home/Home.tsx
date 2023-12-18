import Header from "@/components";
import CardItem from "@/components/CardItem";
import { animationLogo, animationTech } from "@/utils/animations";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { IoArrowForwardCircle } from "react-icons/io5";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

const Home: React.FC = (): JSX.Element => {
  const data = [
    "/logo/html.png",
    "/logo/css.png",
    "/logo/javascript.png",
    "/logo/typescript.png",
    "/logo/sass.png",
    "/logo/node.png",
    "/logo/postgres.png",
    "/logo/react.png",
  ];

  return (
    <Box className={poppins.className}>
      <Header />
      <Container maxW="container.lg" px={10}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationLogo}
          transition={{ duration: 1 }}
        >
          <Stack h="100vh" justify="center" align="center" spacing={0}>
            <Box
              bg="linear-gradient(to right, #4CB8C4 0%, #3CD3AD  51%, #4CB8C4  100%)"
              p={2}
              rounded="full"
              w="150px"
              h="150px"
            >
              <Image
                w="full"
                h="full"
                rounded="full"
                src="https://res.cloudinary.com/doushe6hn/image/upload/v1702891629/logo/phhnskya2vk6mldw1d7n.png"
                alt="logo"
              />
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
            <Text fontWeight="hairline" fontSize="lg" color="#42446E">
              I am a Fullstack Developer
            </Text>

          </Stack>
        </motion.div>

        <Box id="techStack">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationTech}
            transition={{ duration: 1.5 }}
          >
            <Text
              textAlign="center"
              fontSize="2xl"
              fontWeight="700"
              color="#42446E"
            >
              My Tech Stack
            </Text>
            <Text fontSize="lg" mt={1} textAlign="center">
              Technologies I’ve been working with recently
            </Text>
          </motion.div>

          <Flex justify="center" mt={8} gap={10} flexWrap="wrap">
            {data.map((e) => (
              <Box key={e}>
                <Image alt="Logo" w="50px" src={e} />
              </Box>
            ))}
          </Flex>
        </Box>

        <Stack mt={"32"} id="projects" align="center">
          <Text
            textAlign="center"
            fontSize="2xl"
            fontWeight="700"
            color="#42446E"
          >
            Projects
          </Text>
          <Text fontSize="lg" mt={1} textAlign="center">
            Things I’ve built so far
          </Text>

          <Grid gridTemplateColumns="repeat(3,1fr)">
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
      </Container>

      <Text color="blackAlpha.500" textAlign="center" mt="40" mb="10">
        Copyright © 2023 Taufik Hidayat All Rights Reserved
      </Text>
    </Box>
  );
};

export default Home;

import { Box, Card, Divider, HStack, Image, Text } from "@chakra-ui/react"
import Link from "next/link"
import { AiFillGithub, AiOutlineLink } from "react-icons/ai"


const CardItem:React.FC = ():JSX.Element => {
    return (
        <Card w="300px" mt={6} shadow="lg">
          <Image
          roundedTop="lg"
            bgSize="cover"
            h="200px"
            alt="projects"
            src="https://cdn.vcgamers.com/news/wp-content/uploads/2023/03/build-alucard-tersakit-hero-1.jpg"
          />
          <Box p={2}>
            <Text fontSize="lg" textAlign="center" fontWeight="semibold">
              Project Tile goes here
            </Text>

            <Divider my={2} />
            <HStack mt={2} px={3} fontSize="xs" justify="space-between">
                <Link href="#">
              <HStack>
                <AiOutlineLink size={20} />
                <Text >Demo</Text>
              </HStack>
                </Link>
                <Link href="#">
              <HStack>
                <AiFillGithub size={20} />
                <Text>View Code</Text>
              </HStack>
                </Link>
            </HStack>
          </Box>
        </Card>
    )
}
export default CardItem
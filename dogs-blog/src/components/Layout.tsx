import type { ReactNode } from "react";
import { Box, Container, Flex, HStack, Icon, Link as ChakraLink, Text, useColorMode, Button } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { FaPaw, FaSun, FaMoon } from "react-icons/fa";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex minH="100vh" direction="column">
      <Box as="header" bg="white" borderBottomWidth="1px" position="sticky" top={0} zIndex={1000}>
        <Container maxW="6xl" py={3}>
          <Flex align="center" justify="space-between">
            <HStack as={Link} to="/" spacing={3}>
              <Icon as={FaPaw} boxSize={6} color="teal.500" />
              <Text fontWeight="bold">Dog Health Blog</Text>
            </HStack>
            <HStack spacing={6}>
              <ChakraLink as={NavLink} to="/" _activeLink={{ color: "teal.600" }}>Home</ChakraLink>
              <ChakraLink as={NavLink} to="/posts" _activeLink={{ color: "teal.600" }}>Posts</ChakraLink>
              <ChakraLink as={NavLink} to="/about" _activeLink={{ color: "teal.600" }}>About</ChakraLink>
              <Button size="sm" onClick={toggleColorMode} leftIcon={<Icon as={colorMode === "light" ? FaMoon : FaSun} />}>
                {colorMode === "light" ? "Dark" : "Light"}
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="6xl" flex="1" py={8}>
        {children}
      </Container>

      <Box as="footer" bg="gray.100" borderTopWidth="1px" py={6} mt={8}>
        <Container maxW="6xl">
          <Text fontSize="sm" color="gray.600">© {new Date().getFullYear()} Dog Health Blog. All rights reserved.</Text>
        </Container>
      </Box>
    </Flex>
  );
}
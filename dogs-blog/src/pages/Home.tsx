import { Box, Button, Grid, GridItem, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { getAllPosts } from "../lib/posts";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <Stack spacing={10}>
      <Box bg="teal.500" color="white" rounded="xl" p={{ base: 6, md: 10 }} overflow="hidden" position="relative">
        <Stack direction={{ base: "column", md: "row" }} spacing={8} align="center">
          <Box flex="1">
            <Heading size="2xl" lineHeight="1.1">Healthy dogs, happy hearts</Heading>
            <Text opacity={0.95} mt={4} fontSize="lg">
              Practical tips, vet-backed insights, and friendly stories to help you care for your dog with confidence.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4} mt={6}>
              <Button as={Link} to="/posts" colorScheme="whiteAlpha" variant="solid">Read Posts</Button>
              <Button as={Link} to="/about" colorScheme="blackAlpha" variant="outline" _hover={{ bg: "white", color: "teal.600" }}>About Us</Button>
            </Stack>
          </Box>
          <Box flex="1" display={{ base: "none", md: "block" }}>
            <Image src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop" alt="Happy dog" rounded="lg" shadow="xl" />
          </Box>
        </Stack>
      </Box>

      <Box>
        <Heading size="lg" mb={4}>Featured Posts</Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          {posts.map((post) => (
            <GridItem key={post.slug}>
              <PostCard post={post} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
}
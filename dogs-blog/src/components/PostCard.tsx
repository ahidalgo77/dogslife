import { Card, CardBody, Heading, HStack, Image, Stack, Tag, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import type { BlogPost } from "../lib/posts";

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card as={Link} to={`/posts/${post.slug}`} overflow="hidden" _hover={{ shadow: "md", transform: "translateY(-2px)" }} transition="all 0.2s" bg="white" borderWidth="1px">
      {post.heroImage && (
        <Image src={post.heroImage} alt={post.title} h="200px" w="100%" objectFit="cover" />
      )}
      <CardBody>
        <Stack spacing={2}>
          <Heading size="md">{post.title}</Heading>
          <HStack spacing={2} wrap="wrap">
            {post.tags?.map((tag) => (
              <Tag key={tag} colorScheme="teal" variant="subtle">{tag}</Tag>
            ))}
          </HStack>
          <Text color="gray.600" noOfLines={3}>{post.excerpt}</Text>
          <Text fontSize="sm" color="gray.500">{new Date(post.date).toLocaleDateString()}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
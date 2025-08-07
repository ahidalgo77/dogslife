import { useParams, Link as RouterLink } from "react-router-dom";
import { Alert, AlertIcon, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, HStack, Tag, Text } from "@chakra-ui/react";
import { getPostBySlug } from "../lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function PostPage() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <Alert status="error">
        <AlertIcon />
        Post not found.
      </Alert>
    );
  }

  return (
    <Box maxW="3xl" mx="auto">
      <Breadcrumb mb={4} fontSize="sm">
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/posts">Posts</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{post.title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Heading mb={3}>{post.title}</Heading>
      <Text color="gray.500" mb={4}>{new Date(post.date).toLocaleDateString()} {post.author ? `· ${post.author}` : ""}</Text>
      <HStack spacing={2} mb={6} wrap="wrap">
        {post.tags?.map((t) => (
          <Tag key={t} colorScheme="teal" variant="subtle">{t}</Tag>
        ))}
      </HStack>

      <Box className="markdown" bg="white" borderWidth="1px" rounded="md" p={{ base: 4, md: 6 }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </Box>
    </Box>
  );
}
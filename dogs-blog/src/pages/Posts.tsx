import type { ChangeEvent } from "react";
import { useMemo, useState } from "react";
import { Grid, GridItem, Heading, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import PostCard from "../components/PostCard";
import { getAllPosts } from "../lib/posts";

export default function PostsPage() {
  const allPosts = getAllPosts();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return allPosts.filter((p) =>
      p.title.toLowerCase().includes(q) ||
      p.tags?.some((t) => t.toLowerCase().includes(q)) ||
      p.excerpt?.toLowerCase().includes(q)
    );
  }, [allPosts, query]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <Stack spacing={6}>
      <Heading size="lg">All Posts</Heading>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FiSearch />
        </InputLeftElement>
        <Input placeholder="Search posts..." value={query} onChange={handleChange} bg="white" />
      </InputGroup>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
        {filtered.map((post) => (
          <GridItem key={post.slug}>
            <PostCard post={post} />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}
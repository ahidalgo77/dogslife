import { Box, Heading, Text } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <Box maxW="3xl" mx="auto">
      <Heading mb={4}>About Dog Health Blog</Heading>
      <Text fontSize="lg" color="gray.700">
        We share friendly, practical guidance to help you care for your dog's health—nutrition, exercise, grooming, and preventive care—so you and your best friend can thrive together.
      </Text>
    </Box>
  );
}
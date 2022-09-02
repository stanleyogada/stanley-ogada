import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import Image from "@components/Image";
import Link from "@components/Link/Link";
import React from "react";
import { BsGithub, BsLink } from "react-icons/bs";

export type ProjectCardOptionsProps = {
  githubLink?: string;
  websiteLink?: string;
};

export interface ProjectCardProps extends ProjectCardOptionsProps {
  title: string;
  description: string;
  imageSrc: string;
  w?: string;
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  githubLink,
  websiteLink,
  w = "300px",
}: ProjectCardProps) => {
  return (
    <Box
      border="1px solid"
      borderColor="brand.dark-6"
      overflow={"hidden"}
      rounded="md"
      bg="brand.light-3"
      width={w}
    >
      <Text p={3} fontSize="sm" fontWeight={500}>
        Project
      </Text>

      <Image src={imageSrc} alt={title} width="100%" height="150px" />
      <Box p={3}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text fontSize="md" my={3}>
          {description}
        </Text>

        <HStack justifyContent="flex-end">
          {githubLink && (
            <Link
              href={githubLink}
              _hover={{
                color: "brand.primary",
              }}
              title="Github Repository"
            >
              <BsGithub fontSize={"25px"} />
            </Link>
          )}
          {websiteLink && (
            <Link
              href={websiteLink}
              color="brand.primary"
              transform="rotate(-45deg)"
              title="Live Link"
            >
              <BsLink fontSize={"35px"} />
            </Link>
          )}
        </HStack>
      </Box>
    </Box>
  );
};

export default ProjectCard;

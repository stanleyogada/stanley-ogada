import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import Image from "@components/Image";
import Link from "@components/Link";
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
  [x: string]: any;
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  githubLink,
  websiteLink,
  w = "300px",
  ...rest
}: ProjectCardProps) => {
  return (
    <Box
      border="1px solid"
      borderColor="brand.dark-6"
      overflow={"hidden"}
      rounded="md"
      bg="brand.light-3"
      width={w}
      {...rest}
    >
      <HStack p={3} justifyContent={"space-between"}>
        <Text fontSize="sm" fontWeight={500}>
          Project
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
              <BsGithub fontSize={"20px"} />
            </Link>
          )}
          {websiteLink && (
            <Link
              href={websiteLink}
              color="brand.primary"
              transform="rotate(-45deg)"
              title="Live Link"
            >
              <BsLink fontSize={"25px"} />
            </Link>
          )}
        </HStack>
      </HStack>

      <Image src={imageSrc} alt={title} width="100%" height="150px" />
      <Box p={3}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text fontSize="md" my={3}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default ProjectCard;

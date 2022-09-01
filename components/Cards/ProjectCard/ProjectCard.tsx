import { Flex, Heading, HStack, Text, VisuallyHidden } from "@chakra-ui/react";
import Link from "@components/Link/Link";
import Image from "next/image";
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
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  githubLink,
  websiteLink,
}: ProjectCardProps) => {
  return (
    <div>
      <Image src={imageSrc} width={50} height={50} alt={title} />
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text>{description}</Text>

      <HStack alignItems={"center"}>
        {githubLink && (
          <Link
            href={githubLink}
            _hover={{
              color: "brand.primary",
            }}
            title="Github Repository"
          >
            <BsGithub fontSize={"22px"} />
          </Link>
        )}
        {websiteLink && (
          <Link
            href={websiteLink}
            color="brand.primary"
            transform="rotate(-45deg)"
            title="Live Link"
          >
            <BsLink fontSize={"30px"} />
          </Link>
        )}
      </HStack>
    </div>
  );
};

export default ProjectCard;

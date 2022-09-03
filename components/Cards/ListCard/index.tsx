import { Box, Flex, Heading } from "@chakra-ui/react";
import Image from "@components/Image";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  image: { src: string; alt: string; dimension: string | number };
};

const ListCard = ({ title, children, image }: Props) => {
  return (
    <Flex alignItems={"flex-start"} gap={5} py={5}>
      <div data-testid={`listCard: <dimension=${image.dimension}>`}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.dimension}
          height={image.dimension}
        />
      </div>

      <Box>
        <Heading size="md" mb={1}>
          {title}
        </Heading>

        {children}
      </Box>
    </Flex>
  );
};

export default ListCard;

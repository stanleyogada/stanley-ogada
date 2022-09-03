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
    <Flex alignItems={"flex-start"}>
      <div data-testId={`listCard: <dimension=${image.dimension}>`}>
        <Image src={image.src} alt={image.alt} width={30} height={30} />
      </div>

      <Box>
        <Heading>{title}</Heading>

        {children}
      </Box>
    </Flex>
  );
};

export default ListCard;

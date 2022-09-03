import React from "react";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { ReactNode, useContext, useEffect } from "react";
import { HomeContext } from "pages";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";

type Props = {
  id?: string;
  heading?: string;
  bottomButton?: string;
  children: ReactNode;
  seeMore?: {
    cb: () => void;
    text: string;
  };
  [x: string]: any;
};
const Section = ({ id, heading, children, seeMore, ...rest }: Props) => {
  // @ts-ignore
  const { setCurrentSection } = useContext(HomeContext);

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      setCurrentSection(id);
    }
  }, [inView]);

  return (
    <Box
      id={id}
      pt={16}
      ref={ref}
      position="relative"
      rounded="lg"
      overflow="hidden"
    >
      <Box
        as="section"
        rounded="lg"
        backgroundColor="brand.light"
        border="1px solid"
        borderColor="brand.dark-6"
        overflow="hidden"
        px={8}
        pt={8}
        pb={!seeMore ? 8 : 20}
        color="brand.dark"
        {...rest}
      >
        {heading && (
          <Heading as="h2" size="lg" mb={5}>
            {heading}
          </Heading>
        )}
        {children}
      </Box>

      {seeMore ? (
        <Flex
          borderTop={"1px solid"}
          borderColor="brand.dark-6"
          onClick={seeMore.cb}
          position="absolute"
          bottom={0}
          left={0}
          zIndex={2}
          width="100%"
          py={2}
          justifyContent="center"
          alignItems="center"
          _hover={{
            cursor: "pointer",
            bg: "brand.dark-7",
          }}
        >
          <Text fontWeight="bold" fontSize="lg" mr={2}>
            {seeMore.text}
          </Text>
          <HiArrowNarrowRight fontSize={"22px"} />
        </Flex>
      ) : null}
    </Box>
  );
};

export default Section;

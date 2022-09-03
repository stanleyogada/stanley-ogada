import React from "react";

import { Box, Heading } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { ReactNode, useContext, useEffect } from "react";
import { HomeContext } from "pages";

type Props = {
  id?: string;
  heading?: string;
  bottomButton?: string;
  children: ReactNode;
  [x: string]: any;
};
const Section = ({ id, heading, bottomButton, children, ...rest }: Props) => {
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
    <Box id={id} pt={16} ref={ref}>
      <Box
        as="section"
        rounded="lg"
        backgroundColor="brand.light"
        border="1px solid"
        borderColor="brand.dark-6"
        overflow="hidden"
        px={8}
        pt={8}
        pb={!bottomButton ? 8 : 0}
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
    </Box>
  );
};

export default Section;

import React from "react";
import Head from "next/head";
import { Box, StyleProps } from "@chakra-ui/react";
import breakpoints from "@chakra-theme/breakpoints";

type Props = {
  children: React.ReactNode;
  head: {
    title: string;
    description: string;
    linkFaviconImageHref?: string;
  };
};

function Layout({ children, head }: Props) {
  return (
    <Box height="100%" backgroundColor="brand.light-2">
      <Head>
        <title>{head.title}</title>
        <meta name="description" content={head.description} />
        <link rel="icon" href={head.linkFaviconImageHref || "/favicon.ico"} />
      </Head>

      <Box as="header" border={"1px solid"}>
        <Box {...getCenterStyle}>header</Box>
      </Box>
      <Box as="main" border={"1px solid"} {...getCenterStyle}>
        {children}
      </Box>
      <Box as="footer" border={"1px solid"} {...getCenterStyle}>
        footer
      </Box>
    </Box>
  );
}

const getCenterStyle: StyleProps = {
  maxWidth: breakpoints.laptop,
  marginX: "auto",
};

export default Layout;

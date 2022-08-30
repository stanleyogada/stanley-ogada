import React from "react";
import Head from "next/head";
import { Box, Flex, Input, StyleProps, Text } from "@chakra-ui/react";
import breakpoints from "@chakra-theme/breakpoints";
import Brand from "@components/Brand/Brand";
import {
  AiFillExperiment,
  AiFillHome,
  AiFillMessage,
  AiFillProject,
  AiFillSafetyCertificate,
  AiOutlineSearch,
  AiFillThunderbolt,
} from "react-icons/ai";
import { MdSchool } from "react-icons/md";
import { FaMicroblog } from "react-icons/fa";
import { GrStackOverflow } from "react-icons/gr";
import Link from "@components/Link/Link";
import { useRouter } from "next/router";

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
    <Box height="100%" backgroundColor="brand.light-2" overflowY="scroll">
      <Head>
        <title>{head.title}</title>
        <meta name="description" content={head.description} />
        <link rel="icon" href={head.linkFaviconImageHref || "/favicon.ico"} />
      </Head>

      <Flex
        as="header"
        backgroundColor="brand.light"
        marginBottom={5}
        height="60px"
        borderBottom="1px solid"
        borderColor="brand.dark-6"
        position="sticky"
        top={0}
      >
        <Flex
          {...getCenterStyle}
          justifyContent="space-between"
          alignItems="center"
          flex={1}
        >
          <Flex gap={10} alignItems="center">
            <Brand />

            <Flex alignItems={"center"} position="relative">
              <Box
                position={"absolute"}
                top={"50%"}
                left={3}
                transform="translateY(-50%)"
                color="brand.dark-5"
              >
                <AiOutlineSearch fontSize={"22px"} />
              </Box>

              <Input paddingLeft={10} placeholder="Search" />
            </Flex>
          </Flex>

          <Flex
            justifyContent="flex-end"
            alignSelf="stretch"
            color={"brand.dark-2"}
          >
            <Flex gap={3}>
              {headerSectionIcons.map((icon) => (
                <HeaderIcon key={icon.text} {...icon} />
              ))}
            </Flex>

            <Flex borderLeft="1px solid" borderColor="brand.dark-6" gap={3}>
              {headerPageIcons.map((icon) => (
                <HeaderIcon key={icon.text} {...icon} />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Box
        as="main"
        backgroundColor="brand.light"
        marginBottom={5}
        {...getCenterStyle}
      >
        {children}
      </Box>

      <Box as="footer" {...getCenterStyle}>
        footer
      </Box>
    </Box>
  );
}

const HeaderIcon = ({
  icon,
  text,
  tooltipTitle,
  href = "#",
}: {
  icon: React.ReactNode;
  text: string;
  tooltipTitle?: string;
  href?: string;
}) => {
  const router = useRouter();
  const isActive = router.pathname === href || router.asPath.includes(href);

  return (
    <Link
      href={href}
      display="flex"
      flexDirection="column"
      justifyContent={"center"}
      alignItems="center"
      textAlign="center"
      paddingX={4}
      className="header__icon"
      cursor="pointer"
      title={tooltipTitle || text}
      _hover={{
        textDecoration: "none",
      }}
      color={isActive && "brand.primary"}
    >
      <Box
        sx={{
          ".header__icon:hover &": {
            color: "brand.primary",
          },
        }}
      >
        {icon}
      </Box>

      <Text>{text}</Text>
    </Link>
  );
};

const headerSectionIcons = [
  {
    text: "Overview",
    icon: <GrStackOverflow fontSize={"22px"} />,
    href: "#overview",
  },
  {
    text: "Projects",
    icon: <AiFillProject fontSize={"22px"} />,
    href: "#projects",
  },
  {
    text: "About",
    icon: <AiFillMessage fontSize={"22px"} />,
    href: "#about",
  },
  {
    text: "Skills",
    icon: <AiFillExperiment fontSize={"22px"} />,
    href: "#skills",
  },
  {
    text: "EXP",
    icon: <AiFillThunderbolt fontSize={"22px"} />,
    tooltipTitle: "Experience",
    href: "#experience",
  },
  {
    text: "EDU",
    icon: <MdSchool fontSize={"22px"} />,
    tooltipTitle: "Education",
    href: "#education",
  },
  {
    text: "Certs",
    icon: <AiFillSafetyCertificate fontSize={"22px"} />,
    tooltipTitle: "License and Certificates",
    href: "#licenses-certificates",
  },
];

const headerPageIcons = [
  {
    text: "Home",
    icon: <AiFillHome fontSize={"22px"} />,
    tooltipTitle: "Home page",
    href: "/",
  },
  {
    text: "Blog",
    icon: <FaMicroblog fontSize={"22px"} />,
    tooltipTitle: "Blog page",
    href: "/blog",
  },
];

const getCenterStyle: StyleProps = {
  maxWidth: breakpoints["laptop-lg"],
  marginX: "auto",
  marginY: 0,
};

export default Layout;

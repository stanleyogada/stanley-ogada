import React, { useContext, useRef } from "react";
import Head from "next/head";
import {
  Box,
  Flex,
  IconButton,
  Input,
  StyleProps,
  Text,
} from "@chakra-ui/react";
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
  AiTwotoneExperiment,
} from "react-icons/ai";
import { MdSchool } from "react-icons/md";
import { FaMicroblog } from "react-icons/fa";
import { GrStackOverflow } from "react-icons/gr";
import Link from "@components/Link/Link";
import { useRouter } from "next/router";
import { HiOutlineChevronUp, HiBadgeCheck } from "react-icons/hi";
import { HomeContext } from "pages";

type Props = {
  children: React.ReactNode;
  head: {
    title: string;
    description: string;
    linkFaviconImageHref?: string;
  };
};

function Layout({ children, head }: Props) {
  const layoutRef = useRef();
  // @ts-ignore
  const handleGotoSection = () => layoutRef.current.scroll(0, 0);

  return (
    <Box
      // @ts-ignore
      ref={layoutRef}
      height="100%"
      backgroundColor="brand.light-2"
      overflowY="scroll"
    >
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
        zIndex={2}
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

            <Flex
              borderLeft="1px solid"
              ml={3}
              pl={3}
              borderColor="brand.dark-6"
              gap={3}
            >
              {headerPageIcons.map((icon) => (
                <HeaderIcon key={icon.text} {...icon} />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Box as="main" marginBottom={5} {...getCenterStyle}>
        {children}
      </Box>

      <Box as="footer" {...getCenterStyle}>
        footer
      </Box>

      <IconButton
        aria-label="go to top section"
        bg="brand.primary"
        color="brand.light"
        isRound
        position="fixed"
        bottom={10}
        right={10}
        onClick={handleGotoSection}
      >
        <HiOutlineChevronUp />
      </IconButton>
    </Box>
  );
}

const HeaderIcon = ({
  icon,
  text,
  tooltipTitle,
  href = "#",
  page,
}: {
  icon: React.ReactNode;
  text: string;
  tooltipTitle?: string;
  href?: string;
  page?: boolean;
}) => {
  // @ts-ignore
  const { currentSection, setCurrentSection } = useContext(HomeContext);

  const router = useRouter();
  let isActive = router.pathname === href || href.includes(currentSection);

  return (
    <Link
      href={href}
      onClick={() => setCurrentSection(href.replace("#", ""))}
      display="flex"
      flexDirection="column"
      justifyContent={"center"}
      alignItems="center"
      textAlign="center"
      paddingX={4}
      className="header__icon"
      cursor="pointer"
      title={tooltipTitle || text}
      borderBottom="2px solid"
      borderColor={page && isActive ? "" : "transparent"}
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
    icon: <AiTwotoneExperiment fontSize={"22px"} />,
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
    icon: <HiBadgeCheck fontSize={"22px"} />,
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
    page: true,
  },
  {
    text: "Blog",
    icon: <FaMicroblog fontSize={"22px"} />,
    tooltipTitle: "Blog page",
    href: "/blog",
    page: true,
  },
];

const getCenterStyle: StyleProps = {
  maxWidth: breakpoints["laptop-lg"],
  marginX: "auto",
  marginY: 0,
};

export default Layout;

import type { NextPage } from "next";
import Layout from "@components/Layout";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  ListItem,
  Stack,
  StackDivider,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import { createContext, useState } from "react";
import { ImLocation } from "react-icons/im";
import { FaHashtag } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";
import Link from "@components/Link";
import { AiTwotoneMail } from "react-icons/ai";
import { VscDebugStackframeDot } from "react-icons/vsc";
import {
  BsDownload,
  BsFillTelephoneFill,
  BsGithub,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import Section from "@components/Section";
import ProjectCard from "@components/Cards/ProjectCard";
import type { ProjectCardProps } from "@components/Cards/ProjectCard";
import Image from "@components/Image";

// @ts-ignore
import { Slider } from "react-rapid-carousel";
import ListCard from "@components/Cards/ListCard";

// @ts-ignore
export const HomeContext = createContext();

const Home: NextPage = () => {
  const toast = useToast();
  const [currentSection, setCurrentSection] = useState<string>("");

  const handleDownloadResume = () => {
    toast.closeAll();
    toast({
      position: "top",
      title: "Oops! You can't download my resume at moment",
      description: "Please contact me directly for a copy! Thank you 🙂",
      status: "warning",
    });
  };

  return (
    <HomeContext.Provider value={{ currentSection, setCurrentSection }}>
      <Layout
        head={{
          title: "Stanley Ogada",
          description: "The overview of a Software Engineer", // TODO: add a better content
        }}
      >
        <OverviewSection onDownloadResumeClick={handleDownloadResume} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <LicensesCertificatesSection />
        <ProjectsSection />
      </Layout>
    </HomeContext.Provider>
  );
};

const OverviewSection = ({
  onDownloadResumeClick,
}: {
  onDownloadResumeClick: () => void;
}) => (
  <Section id="overview" pt={0} px={0}>
    <Box position={"relative"}>
      <Image
        src="/images/setup.jpeg"
        alt="overview banner"
        width="100%"
        height="350px"
      />

      <Image
        src="/images/profile.JPG"
        alt="Stanley Chinedu Ogada"
        width="250px"
        height="250px"
        //
        position="absolute"
        bottom={-10}
        right={8}
        rounded="full"
        border="10px solid"
        borderColor="brand.light"
        zIndex={1}
      />
    </Box>

    <Flex px={8} pt={10} mt={5} justifyContent="space-between">
      <Box>
        <Heading as="h1">Stanley (Chinedu) Ogada</Heading>
        <Heading as="h2" size="sm" color="brand.dark-2" mt={1}>
          <Text as="span" color="brand.dark-4">
            aka:{" "}
          </Text>

          <Link href="#" as="span" bg="brand.primary-2" fontWeight="500">
            RichCode Connection
          </Link>
        </Heading>

        <Heading as="h2" size="lg" mt={3} mb={5} fontWeight="400">
          Senior Frontend Engineer at Kanda Software
        </Heading>

        <HStack spacing={10}>
          <Flex alignItems={"center"}>
            <AiTwotoneMail fontSize={"22px"} />
            <Link href="#" ml={2}>
              chineduogada@gmail.com
            </Link>
          </Flex>

          <Flex alignItems={"center"}>
            <BsFillTelephoneFill fontSize={"22px"} />
            <Link href="#" ml={2}>
              (+234) 915 659 5803
            </Link>
          </Flex>
        </HStack>

        <HStack pt={10}>
          <Link
            href="#"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Button leftIcon={<BsYoutube />} colorScheme="red" rounded={"full"}>
              Visit My Channel
            </Button>
          </Link>

          <>
            <Button
              rounded={"full"}
              leftIcon={<BsDownload />}
              variant="outline"
              onClick={onDownloadResumeClick}
              color="brand.primary"
            >
              Download My Resume
            </Button>
          </>
        </HStack>
      </Box>

      <Box>
        <Stack spacing={5}>
          <Flex alignItems={"center"}>
            <ImLocation fontSize={"22px"} />
            <Text ml={2} fontWeight="600" fontSize="lg">
              Lagos, Nigeria
            </Text>
          </Flex>

          <Flex alignItems={"center"}>
            <BsLinkedin fontSize={"22px"} />
            <Link href="#" ml={2}>
              linkedin.com/in/stanley-ogada/
            </Link>
          </Flex>

          <Flex alignItems={"center"}>
            <BsGithub fontSize={"22px"} />
            <Link href="#" ml={2}>
              github.com/stanleyogada
            </Link>
          </Flex>

          <Flex alignItems={"center"} gap={1}>
            <FaHashtag fontSize={"22px"} />

            <Text bg="brand.primary-2" ml={2}>
              ReactEngineer,
            </Text>
            <Text bg="brand.primary-2">WebDeveloper,</Text>
            <Text bg="brand.primary-2">LetsConnect</Text>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  </Section>
);
const ProjectsSection = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const handleSeeMore = () => setShowAll((prev) => !prev);

  return (
    <Section
      id="projects"
      heading="Projects"
      seeMore={{
        cb: handleSeeMore,
        text: showAll
          ? "See less projects"
          : `See all ${projectsData.length} projects`,
      }}
    >
      {showAll ? (
        <Grid gridTemplateColumns={"1fr 1fr 1fr"} gap={10}>
          {projectsData.map((product, idx) => (
            <ProjectCard w="auto" key={idx} {...product} />
          ))}
        </Grid>
      ) : (
        <Slider slidesToShow={3} autoSlide>
          {projectsData.map((product, idx) => (
            <ProjectCard w="330px" mx={2} key={idx} {...product} />
          ))}
        </Slider>
      )}
    </Section>
  );
};
const AboutSection = () => (
  <Section id="about" heading="About">
    <Text fontSize={"lg"}>
      Senior Front-end Engineer with over 5 years of experience building
      React-based front-end web apps. I have a BSc degree in computer science,
      thus I have a solid foundation in the field. In addition, I am a huge
      believer of agile methodologies and in using TDD to write unit/integration
      tests to push features fast without damaging old ones.
    </Text>

    <Text mt={5} fontSize="xl">
      I am looking forward to working in a remote, competitive, and demanding
      atmosphere at this stage in my career.
    </Text>
  </Section>
);
const SkillsSection = () => (
  <Section id="skills" heading="Skills">
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur
      labore debitis corporis, voluptates odio quis! Ex aliquam, aliquid quos et
      doloremque eligendi! Sequi accusantium ex in labore voluptatem
      necessitatibus quam dolores quibusdam aliquam eveniet quo placeat quia
      dolorem neque nihil earum quis nostrum atque dignissimos reprehenderit,
      explicabo ipsum aut repellat laudantium. Reprehenderit nesciunt, natus non
      ea est numquam aut assumenda neque dolorem ducimus minima eligendi
      voluptatem quo amet repudiandae ipsum eaque doloribus vero quisquam sed
      quae vel soluta quaerat? Nisi optio deserunt saepe libero aspernatur
      laudantium nostrum similique expedita, voluptatibus ex eligendi aliquid,
      quis laboriosam vero. Quos officia repudiandae quibusdam necessitatibus
      autem deleniti fugiat illum voluptatibus exercitationem quo eaque quam, at
      maiores sit recusandae dignissimos. Voluptates, nam alias. Assumenda ipsa
      neque sequi sunt fugit officiis voluptatibus commodi maiores excepturi
      tenetur aspernatur placeat autem fugiat molestiae maxime iste inventore
      vitae necessitatibus deserunt.
    </Text>
  </Section>
);
const ExperienceSection = () => (
  <Section id="experience" heading="Experience">
    <Stack divider={<StackDivider borderColor="brand.dark-6" />}>
      {[1, 2, 3].map((_, idx) => (
        <ListCard
          key={idx}
          title="Frontend engineer"
          image={{
            src: "/images/profile.JPG",
            alt: "Github",
            dimension: "60px",
          }}
        >
          <Stack spacing={3}>
            <Box>
              <Text fontSize="sm" fontWeight={500}>
                Kanda Software
              </Text>
              <Text fontSize="sm" fontWeight={300} opacity={0.8}>
                <i>May 2022 - Present · 5 months</i>
              </Text>
              <HStack>
                <ImLocation />

                <Text fontSize="sm" fontWeight={400} opacity={0.8}>
                  Newton, Massachusetts, United StatesNewton (Remote)
                </Text>
              </HStack>
            </Box>

            <Box>
              <Heading as="h3" size="xs">
                <u>Tasks and Achievements</u>
              </Heading>
              <UnorderedList>
                <ListItem>
                  Lorem ipsum dolor sit amet, Consectetur adipiscing elit ,
                  Consectetur adipiscing elit , Consectetur adipiscing elit
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, Consectetur adipiscing elit ,
                  Consectetur adipiscing elit , Consectetur adipiscing elit
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, Consectetur adipiscing elit ,
                  Consectetur adipiscing elit , Consectetur adipiscing elit
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, Consectetur adipiscing elit ,
                  Consectetur adipiscing elit , Consectetur adipiscing elit
                </ListItem>
              </UnorderedList>
            </Box>

            <HStack flexWrap="wrap" divider={<VscDebugStackframeDot />}>
              <Heading as="h3" size="xs" minW="99px">
                <u>Skills Applied:</u>
              </Heading>

              {/* <HStack  flexWrap="wrap"> */}
              <Text fontSize="xs">Web Development</Text>
              <Text fontSize="xs">Web Development</Text>
              <Text fontSize="xs">Web Development</Text>
              <Text fontSize="xs">Web Development</Text>
              <Text fontSize="xs">Web Development</Text>
              <Text fontSize="xs">Web Development</Text>
              <Text fontSize="xs">Web Development</Text>
              <Text fontSize="xs">Web Development</Text>
              <Text fontSize="xs">Web Development</Text>
              <Text fontSize="xs">Web Development</Text>
              <Text fontSize="xs">Web Development</Text>
              {/* </HStack> */}
            </HStack>

            {/* Projects Images */}
            <Grid
              gridTemplateColumns="repeat(6, 150px)"
              gridAutoRows="60px"
              gap={3}
            >
              <Image
                src="/images/profile.JPG"
                alt="activity"
                width={"100%"}
                height="auto"
                border="1px solid"
                borderColor="brand.dark-6"
                rounded="md"
              />
              <Image
                src="/images/profile.JPG"
                alt="activity"
                width={"100%"}
                height="auto"
                border="1px solid"
                borderColor="brand.dark-6"
                rounded="md"
              />
              <Image
                src="/images/profile.JPG"
                alt="activity"
                width={"100%"}
                height="auto"
                border="1px solid"
                borderColor="brand.dark-6"
                rounded="md"
              />
              <Image
                src="/images/profile.JPG"
                alt="activity"
                width={"100%"}
                height="auto"
                border="1px solid"
                borderColor="brand.dark-6"
                rounded="md"
              />
              <Image
                src="/images/profile.JPG"
                alt="activity"
                width={"100%"}
                height="auto"
                border="1px solid"
                borderColor="brand.dark-6"
                rounded="md"
              />
            </Grid>
          </Stack>
        </ListCard>
      ))}
    </Stack>
  </Section>
);
const EducationSection = () => (
  <Section id="education" heading="Education">
    <ListCard
      title="Institut Universitaire LES COURS SONOU"
      image={{
        src: "/images/profile.JPG",
        alt: "Institut Universitaire LES COURS SONOU",
        dimension: "60px",
      }}
    >
      <Stack spacing={3}>
        <Box>
          <Text fontSize="sm" fontWeight={500}>
            Bachelor of Science - BS, Computer Science
          </Text>
          <Text fontSize="sm" fontWeight={300} opacity={0.8}>
            <i>2014 - 2017</i>
          </Text>
          <HStack>
            <ImLocation />

            <Text fontSize="sm" fontWeight={400} opacity={0.8}>
              Cotonou, Benin Republic
            </Text>
          </HStack>
        </Box>

        <Box>
          <Text>
            <b>Relevant Coursework: </b>
            Mathematics, Physics, Data Structures & Algorithms, Boolean Algebra
          </Text>
        </Box>

        {/* Projects Images */}
        <Grid
          gridTemplateColumns="repeat(6, 150px)"
          gridAutoRows="60px"
          gap={3}
        >
          <Image
            src="/images/profile.JPG"
            alt="activity"
            width={"100%"}
            height="auto"
            border="1px solid"
            borderColor="brand.dark-6"
            rounded="md"
          />
          <Image
            src="/images/profile.JPG"
            alt="activity"
            width={"100%"}
            height="auto"
            border="1px solid"
            borderColor="brand.dark-6"
            rounded="md"
          />
          <Image
            src="/images/profile.JPG"
            alt="activity"
            width={"100%"}
            height="auto"
            border="1px solid"
            borderColor="brand.dark-6"
            rounded="md"
          />
          <Image
            src="/images/profile.JPG"
            alt="activity"
            width={"100%"}
            height="auto"
            border="1px solid"
            borderColor="brand.dark-6"
            rounded="md"
          />
          <Image
            src="/images/profile.JPG"
            alt="activity"
            width={"100%"}
            height="auto"
            border="1px solid"
            borderColor="brand.dark-6"
            rounded="md"
          />
        </Grid>
      </Stack>
    </ListCard>
  </Section>
);
const LicensesCertificatesSection = () => (
  <Section id="licenses-certificates" heading="Licenses and Certificates">
    <Stack divider={<StackDivider borderColor="brand.dark-6" />}>
      {[0, 0, 0, 0, 0, 0, 0, 0].map((_, idx) => (
        <ListCard
          key={idx}
          title="JavaScript (Basic) Certificate"
          image={{
            src: "/images/profile.JPG",
            alt: "JavaScript (Basic) Certificate",
            dimension: "60px",
          }}
        >
          <Stack spacing={3}>
            <Box>
              <Text fontSize="sm" fontWeight={500}>
                HackerRank
              </Text>
              <Text fontSize="sm" fontWeight={300} opacity={0.8}>
                <i>Issued Feb 2022 · No Expiration Date</i>
              </Text>
            </Box>

            <Text>Credential ID c801699966c8</Text>

            <Box>
              <Button
                rounded={"full"}
                leftIcon={<RiShareBoxFill />}
                variant="outline"
                color="brand.primary"
              >
                Show Credentails
              </Button>
            </Box>
          </Stack>
        </ListCard>
      ))}
    </Stack>
  </Section>
);

const projectsData: ProjectCardProps[] = [
  {
    title: "new project",
    description:
      "A new project is a project that is a part of a project group.",
    imageSrc: "/images/profile.JPG",
    githubLink: "https://github.com",
    websiteLink: "https://dev.com",
  },
  {
    title: "new project",
    description:
      "A new project is a project that is a part of a project group.",
    imageSrc: "/images/profile.JPG",
  },
  {
    title: "new project",
    description:
      "A new project is a project that is a part of a project group.",
    imageSrc: "/images/profile.JPG",
  },
  {
    title: "new project",
    description:
      "A new project is a project that is a part of a project group.",
    imageSrc: "/images/profile.JPG",
  },
  {
    title: "new project",
    description:
      "A new project is a project that is a part of a project group.",
    imageSrc: "/images/profile.JPG",
  },
  {
    title: "new project",
    description:
      "A new project is a project that is a part of a project group.",
    imageSrc: "/images/profile.JPG",
  },
  {
    title: "new project",
    description:
      "A new project is a project that is a part of a project group.",
    imageSrc: "/images/profile.JPG",
  },
  {
    title: "new project",
    description:
      "A new project is a project that is a part of a project group.",
    imageSrc: "/images/profile.JPG",
  },
  {
    title: "new project",
    description:
      "A new project is a project that is a part of a project group.",
    imageSrc: "/images/profile.JPG",
  },
];

export default Home;

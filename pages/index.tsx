import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { ImLocation } from "react-icons/im";
import { FaHashtag } from "react-icons/fa";
import Link from "@components/Link/Link";
import { AiTwotoneMail } from "react-icons/ai";
import {
  BsDownload,
  BsFillTelephoneFill,
  BsGithub,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

// @ts-ignore
export const HomeContext = createContext();

const Home: NextPage = () => {
  const [currentSection, setCurrentSection] = useState<string>("");

  const toast = useToast();

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
        <Section id="overview" pt={0} px={0}>
          <Box position={"relative"}>
            <Box
              width="100%"
              height="350px"
              overflow="hidden"
              position="relative"
            >
              <Box pos={"absolute"} width="100%" height="100%" zIndex={1}></Box>

              <Image
                src="/images/setup.jpeg"
                alt="overview banner"
                width="100%"
                height="100%"
                objectFit="cover"
                objectPosition={"center"}
                layout="fill"
                style={{
                  position: "absolute",
                }}
              />
            </Box>

            <Box
              boxSize="250px"
              overflow="hidden"
              position="absolute"
              bottom={-10}
              right={8}
              rounded="full"
              border="10px solid"
              borderColor="brand.light"
            >
              <Image
                src="/images/profile.JPG"
                alt="overview banner"
                width="100%"
                height="100%"
                objectFit="cover"
                objectPosition={"center"}
                layout="fill"
                style={{ position: "absolute", zIndex: 1 }}
              />
            </Box>
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
                  <Button
                    leftIcon={<BsYoutube />}
                    colorScheme="red"
                    rounded={"full"}
                  >
                    Visit My Channel
                  </Button>
                </Link>

                <>
                  <Button
                    rounded={"full"}
                    leftIcon={<BsDownload />}
                    variant="outline"
                    onClick={handleDownloadResume}
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

                <Flex alignItems={"center"} gap={1}>
                  <FaHashtag fontSize={"22px"} />

                  <Text bg="brand.primary-2" ml={2}>
                    ReactEngineer,
                  </Text>
                  <Text bg="brand.primary-2">WebDeveloper,</Text>
                  <Text bg="brand.primary-2">LetsConnect</Text>
                </Flex>

                <Flex alignItems={"center"}>
                  <BsGithub fontSize={"22px"} />
                  <Link href="#" ml={2}>
                    github.com/stanleyogada
                  </Link>
                </Flex>

                <Flex alignItems={"center"}>
                  <BsLinkedin fontSize={"22px"} />
                  <Link href="#" ml={2}>
                    linkedin.com/in/stanley-ogada/
                  </Link>
                </Flex>
              </Stack>
            </Box>
          </Flex>
        </Section>

        <Section id="projects" heading="Projects">
          <Grid gridTemplateColumns={"1fr 1fr 1fr"} gap={10}>
            <Box
              p={8}
              border="1px solid"
              borderColor="brand.dark-6"
              overflow="hidden"
              rounded="lg"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              maiores tempore optio tempora dicta a nisi labore amet suscipit
              facilis dolor fuga nemo ducimus eaque ratione iusto, vitae quod
              consequatur.
            </Box>
            <Box
              p={8}
              border="1px solid"
              borderColor="brand.dark-6"
              overflow="hidden"
              rounded="lg"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              maiores tempore optio tempora dicta a nisi labore amet suscipit
              facilis dolor fuga nemo ducimus eaque ratione iusto, vitae quod
              consequatur.
            </Box>
            <Box
              p={8}
              border="1px solid"
              borderColor="brand.dark-6"
              overflow="hidden"
              rounded="lg"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              maiores tempore optio tempora dicta a nisi labore amet suscipit
              facilis dolor fuga nemo ducimus eaque ratione iusto, vitae quod
              consequatur.
            </Box>

            <Box
              p={8}
              border="1px solid"
              borderColor="brand.dark-6"
              overflow="hidden"
              rounded="lg"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              maiores tempore optio tempora dicta a nisi labore amet suscipit
              facilis dolor fuga nemo ducimus eaque ratione iusto, vitae quod
              consequatur.
            </Box>
            <Box
              p={8}
              border="1px solid"
              borderColor="brand.dark-6"
              overflow="hidden"
              rounded="lg"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              maiores tempore optio tempora dicta a nisi labore amet suscipit
              facilis dolor fuga nemo ducimus eaque ratione iusto, vitae quod
              consequatur.
            </Box>
            <Box
              p={8}
              border="1px solid"
              borderColor="brand.dark-6"
              overflow="hidden"
              rounded="lg"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              maiores tempore optio tempora dicta a nisi labore amet suscipit
              facilis dolor fuga nemo ducimus eaque ratione iusto, vitae quod
              consequatur.
            </Box>
          </Grid>
        </Section>

        <Section id="about" heading="About">
          <Text fontSize={"lg"}>
            Senior Front-end Engineer with over 5 years of experience building
            React-based front-end web apps. I have a BSc degree in computer
            science, thus I have a solid foundation in the field. In addition, I
            am a huge believer of agile methodologies and in using TDD to write
            unit/integration tests to push features fast without damaging old
            ones.
          </Text>

          <Text mt={5} fontSize="xl">
            I am looking forward to working in a remote, competitive, and
            demanding atmosphere at this stage in my career.
          </Text>
        </Section>

        <Section id="skills" heading="Skills">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            consectetur labore debitis corporis, voluptates odio quis! Ex
            aliquam, aliquid quos et doloremque eligendi! Sequi accusantium ex
            in labore voluptatem necessitatibus quam dolores quibusdam aliquam
            eveniet quo placeat quia dolorem neque nihil earum quis nostrum
            atque dignissimos reprehenderit, explicabo ipsum aut repellat
            laudantium. Reprehenderit nesciunt, natus non ea est numquam aut
            assumenda neque dolorem ducimus minima eligendi voluptatem quo amet
            repudiandae ipsum eaque doloribus vero quisquam sed quae vel soluta
            quaerat? Nisi optio deserunt saepe libero aspernatur laudantium
            nostrum similique expedita, voluptatibus ex eligendi aliquid, quis
            laboriosam vero. Quos officia repudiandae quibusdam necessitatibus
            autem deleniti fugiat illum voluptatibus exercitationem quo eaque
            quam, at maiores sit recusandae dignissimos. Voluptates, nam alias.
            Assumenda ipsa neque sequi sunt fugit officiis voluptatibus commodi
            maiores excepturi tenetur aspernatur placeat autem fugiat molestiae
            maxime iste inventore vitae necessitatibus deserunt.
          </Text>
        </Section>

        <Section id="experience" heading="Experience">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            consectetur labore debitis corporis, voluptates odio quis! Ex
            aliquam, aliquid quos et doloremque eligendi! Sequi accusantium ex
            in labore voluptatem necessitatibus quam dolores quibusdam aliquam
            eveniet quo placeat quia dolorem neque nihil earum quis nostrum
            atque dignissimos reprehenderit, explicabo ipsum aut repellat
            laudantium. Reprehenderit nesciunt, natus non ea est numquam aut
            assumenda neque dolorem ducimus minima eligendi voluptatem quo amet
            repudiandae ipsum eaque doloribus vero quisquam sed quae vel soluta
            quaerat? Nisi optio deserunt saepe libero aspernatur laudantium
            nostrum similique expedita, voluptatibus ex eligendi aliquid, quis
            laboriosam vero. Quos officia repudiandae quibusdam necessitatibus
            autem deleniti fugiat illum voluptatibus exercitationem quo eaque
            quam, at maiores sit recusandae dignissimos. Voluptates, nam alias.
            Assumenda ipsa neque sequi sunt fugit officiis voluptatibus commodi
            maiores excepturi tenetur aspernatur placeat autem fugiat molestiae
            maxime iste inventore vitae necessitatibus deserunt.
          </Text>
        </Section>

        <Section id="education" heading="Education">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            consectetur labore debitis corporis, voluptates odio quis! Ex
            aliquam, aliquid quos et doloremque eligendi! Sequi accusantium ex
            in labore voluptatem necessitatibus quam dolores quibusdam aliquam
            eveniet quo placeat quia dolorem neque nihil earum quis nostrum
            atque dignissimos reprehenderit, explicabo ipsum aut repellat
            laudantium. Reprehenderit nesciunt, natus non ea est numquam aut
            assumenda neque dolorem ducimus minima eligendi voluptatem quo amet
            repudiandae ipsum eaque doloribus vero quisquam sed quae vel soluta
            quaerat? Nisi optio deserunt saepe libero aspernatur laudantium
            nostrum similique expedita, voluptatibus ex eligendi aliquid, quis
            laboriosam vero. Quos officia repudiandae quibusdam necessitatibus
            autem deleniti fugiat illum voluptatibus exercitationem quo eaque
            quam, at maiores sit recusandae dignissimos. Voluptates, nam alias.
            Assumenda ipsa neque sequi sunt fugit officiis voluptatibus commodi
            maiores excepturi tenetur aspernatur placeat autem fugiat molestiae
            maxime iste inventore vitae necessitatibus deserunt.
          </Text>
        </Section>

        <Section id="licenses-certificates" heading="Licenses and Certificates">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            consectetur labore debitis corporis, voluptates odio quis! Ex
            aliquam, aliquid quos et doloremque eligendi! Sequi accusantium ex
            in labore voluptatem necessitatibus quam dolores quibusdam aliquam
            eveniet quo placeat quia dolorem neque nihil earum quis nostrum
            atque dignissimos reprehenderit, explicabo ipsum aut repellat
            laudantium. Reprehenderit nesciunt, natus non ea est numquam aut
            assumenda neque dolorem ducimus minima eligendi voluptatem quo amet
            repudiandae ipsum eaque doloribus vero quisquam sed quae vel soluta
            quaerat? Nisi optio deserunt saepe libero aspernatur laudantium
            nostrum similique expedita, voluptatibus ex eligendi aliquid, quis
            laboriosam vero. Quos officia repudiandae quibusdam necessitatibus
            autem deleniti fugiat illum voluptatibus exercitationem quo eaque
            quam, at maiores sit recusandae dignissimos. Voluptates, nam alias.
            Assumenda ipsa neque sequi sunt fugit officiis voluptatibus commodi
            maiores excepturi tenetur aspernatur placeat autem fugiat molestiae
            maxime iste inventore vitae necessitatibus deserunt.
          </Text>
        </Section>
      </Layout>
    </HomeContext.Provider>
  );
};

type SectionProps = {
  id?: string;
  heading?: string;
  bottomButton?: string;
  children: ReactNode;
  [x: string]: any;
};
const Section = ({
  id,
  heading,
  bottomButton,
  children,
  ...rest
}: SectionProps) => {
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

export default Home;

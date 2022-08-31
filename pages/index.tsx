import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import { Box, Heading, IconButton, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { AiOutlineUp } from "react-icons/ai";
import Link from "@components/Link/Link";

const Home: NextPage = () => {
  return (
    <Layout
      head={{
        title: "Stanley Ogada",
        description: "The overview of a Software Engineer", // TODO: add a better content
      }}
    >
      <Section id="overview" heading="Overview" />

      <Section id="projects" heading="Projects" />

      <Section id="about" heading="About" />

      <Section id="skills" heading="Skills" />

      <Section id="experience" heading="Experience" />

      <Section id="education" heading="Education" />

      <Section id="licenses-certificates" heading="Licenses and Certificates" />

      <Link href="#overview" position="fixed" bottom={10} right={10}>
        <IconButton
          aria-label="go to top"
          bg="brand.primary"
          color="brand.light"
          isRound
        >
          <AiOutlineUp />
        </IconButton>
      </Link>
    </Layout>
  );
};

type SectionProps = {
  id: string;
  heading: string;
};
const Section = ({ id, heading }: SectionProps) => {
  const router = useRouter();

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  });

  useEffect(() => {
    console.log(id, inView);

    if (inView) {
      router.push(`#${id}`);
    }
  }, [inView]);

  return (
    <Box id={id} pt={16} ref={ref}>
      <Box
        as="section"
        border={"1px solid black"}
        height="300px"
        backgroundColor="brand.light"
      >
        <Heading mb={5}>{heading}</Heading>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur
          labore debitis corporis, voluptates odio quis! Ex aliquam, aliquid
          quos et doloremque eligendi! Sequi accusantium ex in labore voluptatem
          necessitatibus quam dolores quibusdam aliquam eveniet quo placeat quia
          dolorem neque nihil earum quis nostrum atque dignissimos
          reprehenderit, explicabo ipsum aut repellat laudantium. Reprehenderit
          nesciunt, natus non ea est numquam aut assumenda neque dolorem ducimus
          minima eligendi voluptatem quo amet repudiandae ipsum eaque doloribus
          vero quisquam sed quae vel soluta quaerat? Nisi optio deserunt saepe
          libero aspernatur laudantium nostrum similique expedita, voluptatibus
          ex eligendi aliquid, quis laboriosam vero. Quos officia repudiandae
          quibusdam necessitatibus autem deleniti fugiat illum voluptatibus
          exercitationem quo eaque quam, at maiores sit recusandae dignissimos.
          Voluptates, nam alias. Assumenda ipsa neque sequi sunt fugit officiis
          voluptatibus commodi maiores excepturi tenetur aspernatur placeat
          autem fugiat molestiae maxime iste inventore vitae necessitatibus
          deserunt.
        </Text>
      </Box>
    </Box>
  );
};

export default Home;

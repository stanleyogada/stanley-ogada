import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import { Box, Heading, Text } from "@chakra-ui/react";

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
    </Layout>
  );
};

type SectionProps = {
  id: string;
  heading: string;
};
const Section = ({ id, heading }: SectionProps) => {
  return (
    <Box id={id} pt={16}>
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

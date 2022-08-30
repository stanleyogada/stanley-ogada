import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import { Box } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Layout
      head={{
        title: "Stanley Ogada",
        description: "The overview of a Software Engineer", // TODO: add a better content
      }}
    >
      <Box border={"1px solid black"} height="1000px"></Box>
    </Layout>
  );
};

export default Home;

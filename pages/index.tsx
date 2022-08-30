import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout
      head={{
        title: "Stanley Ogada",
        description: "The overview of a Software Engineer", // TODO: add a better content
      }}
    >
      main
    </Layout>
  );
};

export default Home;

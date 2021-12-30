import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Movies from "../components/Movies";
import Nav from "../components/Nav";
import { endPoints } from "../lib/helper";
import { Movie } from "../types/types";
const Home: NextPage<{
  response: { page: number; results: Movie[] };
  error?: any;
}> = (props) => {
  const { response, error } = props;
  console.log(response.results);
  return (
    <div className="h-screen scrollbar hover:scrollbar-thumb-gray-900 scrollbar-track-transparent ">
      <Head>
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Movies results={response.results} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const requestUrl =
    endPoints.find((p) => p.title === ctx.query.genre)?.url ||
    endPoints.find((p) => p.title === "Trending")!.url;
  try {
    const request = await fetch(requestUrl);
    const response = await request.json();
    return {
      props: { response },
    };
  } catch (error) {
    return {
      props: { error },
    };
  }
};

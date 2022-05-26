import type { NextPage } from "next";
import Head from "next/head";
import Contact from "../components/Contact";
import Heading from "../components/Heading";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pasha Khomchenko</title>
        <meta name="Pasha Khomchenko's online home" content="Explore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white p-10">
        <Heading />
        <Contact />
      </main>
    </div>
  );
};

export default Home;

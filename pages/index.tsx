import type { NextPage } from "next";
import Head from "next/head";
import Contact from "../components/Contact";
import Heading from "../components/Heading";
import FileBrowser from "../components/FileBrowser";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pasha Khomchenko</title>
        <meta name="Pasha Khomchenko's online home" content="Explore" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        ></meta>
      </Head>

      <main className="min-h-screen bg-white p-8 h-screen">
        <div className="flex flex-col h-full">
          {/* h-screen, h-full and flex enables FileBrowser to grow until the end of the page */}
          <Heading />
          <Contact />
          <FileBrowser />
        </div>
      </main>
    </div>
  );
};

export default Home;

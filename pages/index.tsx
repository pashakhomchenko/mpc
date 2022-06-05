import type { NextPage } from "next";
import Head from "next/head";
import Contact from "../components/Contact";
import Heading from "../components/Heading";
import FileBrowser from "../components/FileBrowser";
import Grid from "../components/Grid";
import Playback from "../components/Playback";

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
        {/* Safari tab color */}
        <meta name="theme-color" content="#F1F2F4"></meta>
      </Head>

      <main className="flex p-4 min-h-[693px] h-screen w-screen justify-center items-center gap-8">
        <div className="flex flex-col h-[629px] w-screen xs:max-w-xs">
          {/* h-screen, h-full and flex enables FileBrowser to grow until the end of the page */}
          <Heading />
          <Contact />
          <FileBrowser />
        </div>
        <div className="hidden xl:grid">
          <Playback />
          <Grid />
        </div>
      </main>
    </div>
  );
};

export default Home;

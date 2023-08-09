import type { GetServerSideProps } from "next";
import Head from "next/head";
import Contact from "../components/Contact";
import Heading from "../components/Heading";
import FileBrowser from "../components/FileBrowser";
import Controller from "../components/Controller";
import DeviceDetector from "device-detector-js";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const deviceDetector = new DeviceDetector();
  const userAgent = ctx.req.headers["user-agent"];
  const isDesktop =
    deviceDetector.parse(userAgent || "").device?.type === "desktop";
  return {
    props: {
      isDesktop,
    },
  };
};

interface HomeProps {
  isDesktop: boolean;
}

const Home = (props: HomeProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://pashakhomchenko.notion.site/Pasha-Khomchenko-a392f4c239cc408bbcee6c5b5480c1ca?pvs=4"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          overflow: "hidden",
        }}
      ></iframe>
    </div>
  );
  return (
    <div>
      <Head>
        <title>Pasha Khomchenko</title>
        <meta
          name="Pasha Khomchenko"
          content="CS @ Umich, learning and having fun"
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        ></meta>
      </Head>

      <main className="font-Michroma flex p-4 min-h-[var(--full)] min-w-[320px] h-screen w-screen justify-center items-center gap-6">
        <div className="flex flex-col h-[var(--bar)] w-full xs:max-w-md">
          {/* h-screen, h-full and flex enables FileBrowser to grow until the end of the page */}
          <Heading />
          <Contact />
          <FileBrowser isDesktop={props.isDesktop} />
        </div>
        <div className={`hidden ${props.isDesktop ? "lg:grid" : "hidden"}`}>
          <Controller />
        </div>
      </main>
    </div>
  );
};

export default Home;

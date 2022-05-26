import type { NextPage } from "next";
import Head from "next/head";

const Blog: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pasha Khomchenko</title>
        <meta name="Pasha Khomchenko's online home" content="Explore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white p-10">
        <h1>BLOG</h1>
      </main>
    </div>
  );
};

export default Blog;

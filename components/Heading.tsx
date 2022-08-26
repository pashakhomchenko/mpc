const Heading = () => {
  return (
    <h1 className="font-Michroma text-4xl text-black select-none">
      Pasha
      <a
        href="/blog"
        target="_blank"
        className="inline-flex bg-gray-light text-red drop-shadow-lg text-2xl py-2 px-6 ml-6 mb-1"
      >
        Blog
      </a>
      <br /> Khomchenko
    </h1>
  );
};

export default Heading;

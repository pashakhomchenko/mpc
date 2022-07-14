import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Subscribe = () => {
  const { query } = useRouter();
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  useEffect(() => {
    query.success && setSuccess(true);
    query.name && setName(String(query.name));
  }, [query]);
  return (
    <div className="h-screen w-screen font-Michroma flex flex-col justify-center items-center">
      {success ? (
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-xl">Payment was successful</h1>
          <a
            className="text-xl underline"
            href={`https://infinitedegrees.xyz/subscribe?success=true&name=${name}`}
          >
            Return to the app
          </a>
        </div>
      ) : (
        <h1 className="text-xl">Loading...</h1>
      )}
    </div>
  );
};

export default Subscribe;
